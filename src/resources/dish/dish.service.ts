import dishRepo from './dish.memory.repo';
import Dish from './dish.model';

const getAll = () => dishRepo.getAll();

const getById = (id: number) => dishRepo.getById(id);

const create = (payload: Dish) => {
    const dish = new Dish(payload);
    const dishCreated = dishRepo.create(dish);
    return dishCreated;
};

const updateById = (id: number, updatedDish: Dish) => {
    const existingDish = dishRepo.getById(id);
  
    if (!existingDish) {
      return null; 
    }
  
    dishRepo.updateById(id, updatedDish);
  
    return updatedDish;
};

const deleteById = (id: number): boolean => {
    dishRepo.deleteById(id);
    return true;
};

export default { getAll, getById, create, updateById, deleteById };
