import express from 'express'
import { reviewController } from './review.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import validateRequest from '../../middlewares/validateRequest';
import { ReviewValidation } from './review.validation';

const router = express.Router();

router.get('/', reviewController.getAllFromDB);

router.post(
    '/',
    auth(UserRole.PATIENT),
    validateRequest(ReviewValidation.create),
    reviewController.insertIntoDB
);


export const ReviewRoutes = router;