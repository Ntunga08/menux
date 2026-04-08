import { Router } from 'express';
import { getRestaurant } from './restaurant.controller.js';

const router = Router();

router.get('/', getRestaurant);

export default router;
