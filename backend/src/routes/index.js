import { Router } from 'express';
import authRoutes from '../modules/auth/auth.route.js';
import userRoutes from '../modules/users/user.route.js';
import tableRoutes from '../modules/tables/table.route.js';
import reservationRoutes from '../modules/reservations/reservation.route.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/tables', tableRoutes);
router.use('/reservations', reservationRoutes);

export default router;
