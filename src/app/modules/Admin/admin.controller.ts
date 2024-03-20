import { NextFunction, Request, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constans";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

const getAllFromDB = async (req: Request, res: Response) => {
  try {
    // console.log(req.query)
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    console.log(options);
    const result = await AdminService.getAllFromDB(filters, options);
    sendResponse(res, {
      statusCode:  httpStatus.OK,
      success: true,
      message: "admin Data fatched!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

const getByIdFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await AdminService.getByIdFromDB(id);
    sendResponse(res, {
      statusCode:  httpStatus.OK,
      success: true,
      message: "admin Data fetched!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateIntoDB = async (req: Request, res: Response,next:NextFunction) => {
  const { id } = req.params;
  // console.log(req.body);
  try {
    const result = await AdminService.updateIntoDB(id, req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "admin Data Updated!",
      data: result,
    });
  } catch (err) {
   next(err)
  }
};

const deleteFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(req.body);
  try {
    const result = await AdminService.deleteFromDB(id);
    sendResponse(res, {
      statusCode:  httpStatus.OK,
      success: true,
      message: "admin Data deleted!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};
const softDeleteFromDB = async (req: Request, res: Response) => {
  const { id } = req.params;
  // console.log(req.body);
  try {
    const result = await AdminService.softDeleteFromDB(id);
    sendResponse(res, {
      statusCode:  httpStatus.OK,
      success: true,
      message: "admin Data Soft deleted!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.name || "Something went wrong",
      error: err,
    });
  }
};

export const AdminController = {
  getAllFromDB,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
  softDeleteFromDB,
};
