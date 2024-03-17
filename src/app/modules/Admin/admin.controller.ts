import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import pick from "../../../shared/pick";



const getAllFromDB = async (req: Request, res: Response) => {
  try {
    const result = await AdminService.getAllFromDB(
      pick(req.query, ["name", "email", "searchTerm", "contactNumber"])
    );
    res.status(200).json({
      success: true,
      message: "Admin Retrieve successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name,
      error: error,
    });
  }
};

export const AdminController = {
  getAllFromDB,
};
