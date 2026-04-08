import { Router } from 'express';
import { listOrders } from './orders.controller.js';

const router = Router();

router.get('/', listOrders);

export default router;
