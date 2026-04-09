import {
        createRestaurant,
        deleteRestaurant,
        getAllRestaurants,
        getRestaurant,
        getRestaurantByOwner,
        getRestaurantWithDetails,
        restaurantExists,
        updateRestaurant,
        updateRestaurantStatus
} from './restaurant.service.js';
import { sendCreated, sendSuccess } from '../../utils/response.js';

const parseId = (value) => {
        const id = Number(value);
        return Number.isInteger(id) && id > 0 ? id : null;
};

export const listRestaurants = async (req, res, next) => {
        try {
                const data = await getAllRestaurants();
                return sendSuccess(res, data, 'Restaurants loaded');
        } catch (error) {
                return next(error);
        }
};

export const getRestaurantController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await getRestaurant(restaurantId);

                if (!data) {
                        return res.status(404).json({ message: 'Restaurant not found' });
                }

                return sendSuccess(res, data, 'Restaurant loaded');
        } catch (error) {
                return next(error);
        }
};

export const createRestaurantController = async (req, res, next) => {
        try {
                const data = await createRestaurant(req.body);
                return sendCreated(res, data, 'Restaurant created');
        } catch (error) {
                return next(error);
        }
};

export const updateRestaurantController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await updateRestaurant(restaurantId, req.body);
                return sendSuccess(res, data, 'Restaurant updated');
        } catch (error) {
                return next(error);
        }
};

export const deleteRestaurantController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await deleteRestaurant(restaurantId);
                return sendSuccess(res, data, 'Restaurant deleted');
        } catch (error) {
                return next(error);
        }
};

export const getRestaurantDetailsController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await getRestaurantWithDetails(restaurantId);

                if (!data) {
                        return res.status(404).json({ message: 'Restaurant not found' });
                }

                return sendSuccess(res, data, 'Restaurant details loaded');
        } catch (error) {
                return next(error);
        }
};

export const listRestaurantsByOwnerController = async (req, res, next) => {
        try {
                const ownerId = parseId(req.params.ownerId);

                if (!ownerId) {
                        return res.status(400).json({ message: 'Invalid owner id' });
                }

                const data = await getRestaurantByOwner(ownerId);
                return sendSuccess(res, data, 'Owner restaurants loaded');
        } catch (error) {
                return next(error);
        }
};

export const updateRestaurantStatusController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await updateRestaurantStatus(restaurantId, req.body.isActive);
                return sendSuccess(res, data, 'Restaurant status updated');
        } catch (error) {
                return next(error);
        }
};

export const restaurantExistsController = async (req, res, next) => {
        try {
                const restaurantId = parseId(req.params.restaurantId);

                if (!restaurantId) {
                        return res.status(400).json({ message: 'Invalid restaurant id' });
                }

                const data = await restaurantExists(restaurantId);
                return sendSuccess(res, { exists: data }, 'Restaurant existence checked');
        } catch (error) {
                return next(error);
        }
};


