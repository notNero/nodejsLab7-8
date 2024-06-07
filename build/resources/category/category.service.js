import categoryRepo from './category.memory.repo.js';
import dishRepo from '../dish/dish.memory.repo.js';
import Category from './category.model.js';
const getAll = () => categoryRepo.getAll();
const getById = (id) => categoryRepo.getById(id);
const create = (payload) => {
    const category = new Category(payload);
    const categoryCreated = categoryRepo.create(category);
    return categoryCreated;
};
const updateById = (id, updatedCategory) => {
    const existingCategory = categoryRepo.getById(id);
    if (!existingCategory) {
        return null;
    }
    categoryRepo.updateById(id, updatedCategory);
    return updatedCategory;
};
const deleteById = (id) => {
    categoryRepo.deleteById(id);
    dishRepo.deleteByCategoryId(id);
    return true;
};
const getDishesByCategoryId = (id) => dishRepo.getByCategoryId(id);
export default { getAll, getById, create, updateById, deleteById, getDishesByCategoryId };
//# sourceMappingURL=category.service.js.map