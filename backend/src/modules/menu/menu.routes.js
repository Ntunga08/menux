import express from 'express';
import * as menuController from './menu.controller.js';
import { authenticate } from '../../middlewares/auth.js';
import { authorize } from '../../middlewares/roles.js';

const router = express.Router();

// CATEGORY ROUTES
router.get('/categories', menuController.getAllCategoriesWithItems);
router.post('/categories', authenticate, authorize('ADMIN'), menuController.createCategory);
router.put('/categories/:id', authenticate, authorize('ADMIN'), menuController.updateCategory);
router.delete('/categories/:id', authenticate, authorize('ADMIN'), menuController.deleteCategory);

// MENU ITEM ROUTES
router.get('/items', menuController.getAllMenuItems);
router.get('/items/category/:categoryId', menuController.getItemsByCategory);
router.post('/items', authenticate, authorize('ADMIN'), menuController.createMenuItem);
router.put('/items/:id', authenticate, authorize('ADMIN'), menuController.updateMenuItem);
router.delete('/items/:id', authenticate, authorize('ADMIN'), menuController.deleteMenuItem);

export default router;