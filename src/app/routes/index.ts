import express from "express";
import { UserRoutes } from "../modules/User/user.routes";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { SpecialtiesRoutes } from "../modules/Specialties/specialties.route";
import { DoctorRoutes } from "../modules/Doctor/doctor.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
