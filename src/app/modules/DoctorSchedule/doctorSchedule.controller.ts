import { Request, Response } from "express";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { doctorSchedule } from "./doctorSchedule.service";
import { IAuthUser } from "../../interfaces/common";
import catchAsync from "../../../shared/catchAsync";

const insertIntoDB = catchAsync(
  async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;

    const result = await doctorSchedule.insertIntoDB(user, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Doctor Schedule Created successful!",
      data: result,
    });
  }
);

export const doctorScheduleController = {
  insertIntoDB,
};
