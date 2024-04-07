import { Request, Response } from "express";

import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { scheduleService } from "./schedule.service";
import catchAsync from "../../../shared/catchAsync";
import pick from "../../../shared/pick";
import { IAuthUser } from "../../interfaces/common";


const insertIntoDB = async (req: Request, res: Response) => {
  const result = await scheduleService.insertIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Schedule Created successful!",
    data: result,
  });
};

const getAllFromDB = catchAsync(async (req: Request & { user?: IAuthUser }, res: Response) => {
  const filters = pick(req.query, ['startDate', 'endDate']);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const user = req.user;
  const result = await scheduleService.getAllFromDB(filters, options, user as IAuthUser);

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Schedule fetched successfully!",
      data: result
  });
});


export const scheduleController = {
    insertIntoDB,
 getAllFromDB
};
