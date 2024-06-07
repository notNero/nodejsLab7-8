import menuRepo from './menu.memory.repo';
import categoryRepo from '../category/category.memory.repo';
import Menu from './menu.model';

const getAll = () => menuRepo.getAll();

const getById = (id: number) => menuRepo.getById(id);

const deleteById = (id: number) => {
    menuRepo.deleteById(id);
    categoryRepo.deleteByMenuId(id);
    return true;
}    

const create = (payload: Menu) => {
    const menu = new Menu(payload);
    const menuCreated = menuRepo.create(menu);
    return menuCreated;
}

const updateById = (id: number, updatedMenu: Menu) => {
    const existingMenu = menuRepo.getById(id);
  
    if (!existingMenu) {
      return null; 
    }
  

  
    menuRepo.updateById(id, updatedMenu);
  
    return existingMenu;
};


const getCategories = (menuId: number) => categoryRepo.getByMenuId(menuId)

export default{ getAll, getById, deleteById, create, updateById, getCategories };
