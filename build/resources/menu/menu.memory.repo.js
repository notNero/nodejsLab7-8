import menuData from '../../data/menu.data.js';
const getAll = async () => menuData;
const create = async (menu) => {
    menuData.push(menu);
    return menu;
};
const getById = async (id) => menuData.find((menu) => menu.id === id);
const deleteById = async (id) => {
    const index = menuData.findIndex((menu) => menu.id === id);
    if (index !== -1) {
        menuData.splice(index, 1);
        return true;
    }
    return null;
};
const updateById = async (id, updatedMenu) => {
    const index = menuData.findIndex(menu => menu.id === id);
    if (index !== -1) {
        menuData[index] = updatedMenu;
        return true;
    }
    return false;
};
export default { getAll, getById, deleteById, create, updateById };
//# sourceMappingURL=menu.memory.repo.js.map