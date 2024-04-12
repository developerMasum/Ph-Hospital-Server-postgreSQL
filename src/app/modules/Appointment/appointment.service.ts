import prisma from "../../../shared/prisma";
import { v4 as uuidv4 } from "uuid";
import { IAuthUser } from "./../../interfaces/common";
const createAppointment = async (user: IAuthUser, payload: any) => {
  // console.log("okay",user);
  const patientData = await prisma.patient.findUniqueOrThrow({
    where: {
      email: user?.email,
    },
  });
  const doctorData = await prisma.doctor.findUniqueOrThrow({
    where: {
      id: payload.doctorId,
    },
  });

  const doctorScheduleData = await prisma.doctorSchedules.findFirstOrThrow({
    where: {
      doctorId: doctorData.id,
      scheduleId: payload.scheduleId,
      isBooked: false,
    },
  });
  //created by uuid//
  const videoCallingId = uuidv4();

  const result = await prisma.$transaction(async (tx) => {
    const appointmentData = await tx.appointment.create({
      data: {
        patientId: patientData.id,
        doctorId: doctorData.id,
        scheduleId: payload.scheduleId,
        videoCallingId,
      },
      include: {
        patient: true,
        doctor: true,
        schedule: true,
      },
    });
    await tx.doctorSchedules.update({
        where:{
            doctorId_scheduleId:{
                doctorId: doctorData.id,
                scheduleId: payload.scheduleId
            },
           
        },
        data:{
            isBooked: true,
            appointmentId: appointmentData.id
        }
    })
     return appointmentData
  });

  return result;
};

export const appointmentService = {
  createAppointment,
};
