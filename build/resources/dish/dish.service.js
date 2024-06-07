import dishRepo from './dish.memory.repo.js';
import Dish from './dish.model.js';
const getAll = () => dishRepo.getAll();
const getById = (id) => dishRepo.getById(id);
const create = (payload) => {
    const dish = new Dish(payload);
    const dishCreated = dishRepo.create(dish);
    return dishCreated;
};
const updateById = (id, updatedDish) => {
    const existingDish = dishRepo.getById(id);
    if (!existingDish) {
        return null;
    }
    dishRepo.updateById(id, updatedDish);
    return updatedDish;
};
const deleteById = (id) => {
    dishRepo.deleteById(id);
    return true;
};
export default { getAll, getById, create, updateById, deleteById };
//# sourceMappingURL=dish.service.js.map