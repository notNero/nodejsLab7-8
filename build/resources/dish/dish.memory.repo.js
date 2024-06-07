import dishData from '../../data/dish.data.js';
const getAll = async () => dishData;
const create = async (dish) => {
    dishData.push(dish);
    return dish;
};
const getById = async (id) => dishData.find((dish) => dish.id === id);
const deleteById = async (id) => {
    const index = dishData.findIndex((dish) => dish.id === id);
    if (index !== -1) {
        dishData.splice(index, 1);
        return true;
    }
    return null;
};
const updateById = async (id, updatedDish) => {
    const index = dishData.findIndex((dish) => dish.id === id);
    if (index !== -1) {
        dishData[index] = updatedDish;
        return true;
    }
    return false;
};
const getByCategoryId = async (categoryId) => dishData.filter((dish) => dish.categoryId === categoryId);
const deleteByCategoryId = async (categoryId) => {
    const indexToDelete = dishData.findIndex((dish) => dish.categoryId === categoryId);
    if (indexToDelete !== -1) {
        dishData.splice(indexToDelete, 1);
        return true;
    }
    return false;
};
export default { getAll, getById, deleteById, create, updateById, getByCategoryId, deleteByCategoryId };
//# sourceMappingURL=dish.memory.repo.js.map