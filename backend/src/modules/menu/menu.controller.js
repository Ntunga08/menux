import * as menuService from './menu.service.js';

// CATEGORY CONTROLLERS
export const getAllCategoriesWithItems = async (req, res) => {
  try {
    const categories = await menuService.getAllCategoriesWithItems();
    res.status(200).json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const category = await menuService.createCategory(req.body);
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await menuService.updateCategory(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await menuService.deleteCategory(parseInt(req.params.id));
    res.status(200).json({ success: true, message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// MENU ITEM CONTROLLERS
export const getAllMenuItems = async (req, res) => {
  try {
    const items = await menuService.getAllMenuItems();
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const item = await menuService.createMenuItem(req.body);
    res.status(201).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateMenuItem = async (req, res) => {
  try {
    const item = await menuService.updateMenuItem(
      parseInt(req.params.id),
      req.body
    );
    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    await menuService.deleteMenuItem(parseInt(req.params.id));
    res.status(200).json({ success: true, message: 'Menu item deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getItemsByCategory = async (req, res) => {
  try {
    const items = await menuService.getItemsByCategory(
      parseInt(req.params.categoryId)
    );
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};