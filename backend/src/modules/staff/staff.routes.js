import { Router } from 'express';
import { listStaff } from './staff.controller.js';

const router = Router();

router.get('/', listStaff);

export default router;
