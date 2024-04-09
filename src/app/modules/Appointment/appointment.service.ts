import prisma from '../../../shared/prisma';
import { IAuthUser } from './../../interfaces/common';
const createAppointment = async(user:IAuthUser,payload:any)=>{
    // console.log("okay",user);
    const patientData = await prisma.patient.findUniqueOrThrow({
        where:{
            email: user?.email
        }
    })
    console.log(patientData);
}

export const appointmentService = {
    createAppointment
}