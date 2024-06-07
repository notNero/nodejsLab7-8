import categoryRepo from './category.memory.repo';
import dishRepo from '../dish/dish.memory.repo';
import Category from './category.model';

const getAll = () => categoryRepo.getAll();

const getById = (id: number) => categoryRepo.getById(id);

const create = (payload: Category) => {
    const category = new Category(payload);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};

const updateById = (id: number, updatedCategory: Category) => {
    const existingCategory = categoryRepo.getById(id);
  
    if (!existingCategory) {
      return null; 
    }
  
    categoryRepo.updateById(id, updatedCategory);
  
    return updatedCategory;
};

const deleteById = (id: number) => {
    categoryRepo.deleteById(id);
    dishRepo.deleteByCategoryId(id);
    return true;
};

const getDishesByCategoryId = (id: number) => dishRepo.getByCategoryId(id);

export default { getAll, getById, create, updateById, deleteById, getDishesByCategoryId };
