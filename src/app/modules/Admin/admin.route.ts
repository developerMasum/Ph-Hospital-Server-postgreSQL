import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);
router.get("/:id", AdminController.getByIdFromDB);

export const AdminRoutes = router;
