import prisma from '../../utils/prisma.js';

// CATEGORY FUNCTIONS
export const getAllCategoriesWithItems = async () => {
  return await prisma.menuCategory.findMany({
    include: { items: true },
  });
};

export const createCategory = async (data) => {
  return await prisma.menuCategory.create({
    data: {
      name: data.name,
      description: data.description,
    },
  });
};

export const updateCategory = async (categoryId, data) => {
  return await prisma.menuCategory.update({
    where: { id: categoryId },
    data: { name: data.name },
  });
};

export const deleteCategory = async (categoryId) => {
  await prisma.menuCategory.delete({
    where: { id: categoryId },
  });
};

// MENU ITEM FUNCTIONS
export const getAllMenuItems = async () => {
  return await prisma.menuItem.findMany();
};

export const createMenuItem = async (data) => {
  return await prisma.menuItem.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
    },
  });
};

export const updateMenuItem = async (itemId, data) => {
  return await prisma.menuItem.update({
    where: { id: itemId },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId,
    },
  });
};

export const deleteMenuItem = async (itemId) => {
  await prisma.menuItem.delete({
    where: { id: itemId },
  });
}; 

export const getItemsByCategory = async (categoryId) => {
  return await prisma.menuItem.findMany({
    where: { categoryId },
  });
};