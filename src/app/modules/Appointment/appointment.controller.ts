import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { appointmentService } from "./appointment.service";
import { IAuthUser } from "../../interfaces/common";

const createAppointment = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user as IAuthUser;
    const result = await appointmentService.createAppointment(user, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment Created Successfully !!",
        data: result
    });
});

export const appointmentController = {
    createAppointment
};
