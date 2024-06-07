import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Menu from './menu.model.js';
import Category from '../category/category.model.js';
import menuService from './menu.service.js';
const router = Router();
router.route('/')
    .get(async (_req, res) => {
    const menu = await menuService.getAll();
    res.json(menu.map((menuItem) => Menu.toResponse(menuItem)));
})
    .post(async (req, res) => {
    const { id, title, photo, isPublish } = req.body;
    const menu = await menuService.create({ id, title, photo, isPublish });
    if (menu) {
        res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:menuId')
    .get(async (req, res) => {
    const { menuId } = req.params;
    const menu = await menuService.getById(parseInt(menuId, 10));
    if (menu) {
        res.json(Menu.toResponse(menu));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
})
    .put(async (req, res) => {
    const { menuId } = req.params;
    const { title, photo, isPublish } = req.body;
    const id = parseInt(menuId, 10);
    const updatedMenu = await menuService.updateById(id, { id, title, photo, isPublish });
    if (updatedMenu) {
        res.json(Menu.toResponse(updatedMenu));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const { menuId } = req.params;
    const menuDeleted = await menuService.deleteById(parseInt(menuId, 10));
    if (menuDeleted) {
        res.json(StatusCodes.OK);
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
});
router.route('/:menuId/categories')
    .get(async (req, res) => {
    const { menuId } = req.params;
    const categories = await menuService.getCategories(parseInt(menuId, 10));
    if (categories) {
        res.json(categories.map((category) => Category.toResponse(category)));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
});
export default router;
//# sourceMappingURL=menu.router.js.map