import express from 'express';
import * as menuController from './menu.controller.js';
import { verifyJwt } from '../../middlewares/auth.js';
import { requireRole } from '../../middlewares/roles.js';

const router = express.Router();

// CATEGORY ROUTES
router.get('/categories', menuController.getAllCategoriesWithItems);
router.post('/categories', verifyJwt, requireRole('ADMIN'), menuController.createCategory);
router.put('/categories/:id', verifyJwt, requireRole('ADMIN'), menuController.updateCategory);
router.delete('/categories/:id', verifyJwt, requireRole('ADMIN'), menuController.deleteCategory);

// MENU ITEM ROUTES
router.get('/items', menuController.getAllMenuItems);
router.get('/items/category/:categoryId', menuController.getItemsByCategory);
router.post('/items', verifyJwt, requireRole('ADMIN'), menuController.createMenuItem);
router.put('/items/:id', verifyJwt, requireRole('ADMIN'), menuController.updateMenuItem);
router.delete('/items/:id', verifyJwt, requireRole('ADMIN'), menuController.deleteMenuItem);

export default router;