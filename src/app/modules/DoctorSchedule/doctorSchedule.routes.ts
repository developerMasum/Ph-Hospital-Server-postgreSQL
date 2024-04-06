import express from 'express';

import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import { doctorScheduleController } from './doctorSchedule.controller';

const router = express.Router();

router.post('/',
auth(UserRole.ADMIN,UserRole.SUPER_ADMIN),
doctorScheduleController.insertIntoDB)

export const DoctorScheduleRoutes = router;