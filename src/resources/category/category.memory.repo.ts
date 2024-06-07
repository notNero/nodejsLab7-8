import categoryData from '../../data/category.data';
import Category from './category.model';

const getAll = async (): Promise<Category[]> => categoryData;
  
const create = async (category: Category) => {
  categoryData.push(category);
  return category;
}

const getById = async (id: number): Promise<Category | undefined> => categoryData.find((category) => category.id === id);

const getByMenuId = async (menuId: number): Promise<Category[] | undefined>  => categoryData.filter((category: Category) => category.menuId === menuId);

const deleteByMenuId = async (menuId: number) => {
    const indexToDelete = categoryData.findIndex((category: Category) => category.menuId === menuId);
  
    if (indexToDelete !== -1) {
      categoryData.splice(indexToDelete, 1);
      return true; 
    }
  
    return false; 
};

const deleteById = async (id: number) => {
  const index = categoryData.findIndex((category: Category) => category.id === id);
  if (index !== -1) {
    categoryData.splice(index, 1);
    return true;
  }
  return false; 
}
  
const updateById = async (id: number, updatedCategory: Category) => {
  const index = categoryData.findIndex((category: Category) => category.id === id);

  if (index !== -1) {
    categoryData[index] = updatedCategory;
    return true;
  }

  return false; 
};

export default{ getAll, getById, deleteById, create, updateById, getByMenuId, deleteByMenuId };
