import menuRepo from './menu.memory.repo.js';
import categoryRepo from '../category/category.memory.repo.js';
import Menu from './menu.model.js';
const getAll = () => menuRepo.getAll();
const getById = (id) => menuRepo.getById(id);
const deleteById = (id) => {
    menuRepo.deleteById(id);
    categoryRepo.deleteByMenuId(id);
    return true;
};
const create = (payload) => {
    const menu = new Menu(payload);
    const menuCreated = menuRepo.create(menu);
    return menuCreated;
};
const updateById = (id, updatedMenu) => {
    const existingMenu = menuRepo.getById(id);
    if (!existingMenu) {
        return null;
    }
    menuRepo.updateById(id, updatedMenu);
    return existingMenu;
};
const getCategories = (menuId) => categoryRepo.getByMenuId(menuId);
export default { getAll, getById, deleteById, create, updateById, getCategories };
//# sourceMappingURL=menu.service.js.map