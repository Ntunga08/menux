import { Router } from 'express';
import { listReservations } from './reservation.controller.js';

const router = Router();

router.get('/', listReservations);

export default router;
