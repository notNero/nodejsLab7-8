import categoryData from '../../data/category.data.js';
const getAll = async () => categoryData;
const create = async (category) => {
    categoryData.push(category);
    return category;
};
const getById = async (id) => categoryData.find((category) => category.id === id);
const getByMenuId = async (menuId) => categoryData.filter((category) => category.menuId === menuId);
const deleteByMenuId = async (menuId) => {
    const indexToDelete = categoryData.findIndex((category) => category.menuId === menuId);
    if (indexToDelete !== -1) {
        categoryData.splice(indexToDelete, 1);
        return true;
    }
    return false;
};
const deleteById = async (id) => {
    const index = categoryData.findIndex((category) => category.id === id);
    if (index !== -1) {
        categoryData.splice(index, 1);
        return true;
    }
    return false;
};
const updateById = async (id, updatedCategory) => {
    const index = categoryData.findIndex((category) => category.id === id);
    if (index !== -1) {
        categoryData[index] = updatedCategory;
        return true;
    }
    return false;
};
export default { getAll, getById, deleteById, create, updateById, getByMenuId, deleteByMenuId };
//# sourceMappingURL=category.memory.repo.js.map