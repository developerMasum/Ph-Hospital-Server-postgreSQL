import express from 'express';

import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import { doctorScheduleController } from './doctorSchedule.controller';

const router = express.Router();

router.post('/',
auth(UserRole.DOCTOR),
doctorScheduleController.insertIntoDB)

export const DoctorScheduleRoutes = router;