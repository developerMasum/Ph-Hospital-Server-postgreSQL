import { Request, Response } from "express";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { doctorSchedule } from "./doctorSchedule.service";



const insertIntoDB = async (req: Request, res: Response) => {
    const user = req.user;
   
  const result = await doctorSchedule.insertIntoDB(user,req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Schedule Created successful!",
    data: result,
  });
};


export const doctorScheduleController = {
    insertIntoDB,
 
};
