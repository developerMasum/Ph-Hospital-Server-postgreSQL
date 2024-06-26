import express from 'express';
import { scheduleController } from './schedule.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';

const router = express.Router();

router.post('/',
auth(UserRole.ADMIN,UserRole.SUPER_ADMIN),
scheduleController.insertIntoDB)


router.get('/',
auth(UserRole.DOCTOR),
scheduleController.getAllFromDB)

export const ScheduleRoutes = router;