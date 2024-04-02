import express, { NextFunction, Request, Response } from 'express';
import { SpecialtiesController } from './specialties.controller';
import auth from '../../middlewares/auth';
import { UserRole } from '@prisma/client';
import { SpecialtiesValidation } from './specialties.validation';
import { fileUploader } from '../../../helpers/filerUploader';


const router = express.Router();

router.get(
    '/',
    SpecialtiesController.getAllFromDB
);

router.post(
    '/',
    fileUploader.upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = SpecialtiesValidation.create.parse(JSON.parse(req.body.data))
        return SpecialtiesController.insertIntoDB(req, res, next)
    }
);



router.delete(
    '/:id',
    auth(UserRole.SUPER_ADMIN, UserRole.ADMIN),
    SpecialtiesController.deleteFromDB
);

export const SpecialtiesRoutes = router;