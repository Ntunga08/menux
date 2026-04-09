import { Router } from 'express';
import {
	createRestaurantController,
	deleteRestaurantController,
	getRestaurantController,
	getRestaurantDetailsController,
	listRestaurants,
	listRestaurantsByOwnerController,
	restaurantExistsController,
	updateRestaurantController,
	updateRestaurantStatusController
} from './restaurant.controller.js';

const router = Router();

router.get('/', listRestaurants);
router.get('/owner/:ownerId', listRestaurantsByOwnerController);
router.get('/:restaurantId/details', getRestaurantDetailsController);
router.get('/:restaurantId/exists', restaurantExistsController);
router.get('/:restaurantId', getRestaurantController);
router.post('/', createRestaurantController);
router.patch('/:restaurantId', updateRestaurantController);
router.patch('/:restaurantId/status', updateRestaurantStatusController);
router.delete('/:restaurantId', deleteRestaurantController);

export default router;
