import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Dish from '../dish/dish.model.js';
import Category from './category.model.js';
import categoryService from './category.service.js';
const router = Router();
router.route('/')
    .get(async (_req, res) => {
    const categories = await categoryService.getAll();
    res.json(categories.map((category) => Category.toResponse(category)));
})
    .post(async (req, res) => {
    const { id, title, photo, isVisible, menuId } = req.body;
    const category = await categoryService.create({ id, title, photo, isVisible, menuId });
    if (category) {
        res.status(StatusCodes.CREATED).json(Category.toResponse(category));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:categoryId')
    .get(async (req, res) => {
    const { categoryId } = req.params;
    const category = await categoryService.getById(parseInt(categoryId, 10));
    if (category) {
        res.json(Category.toResponse(category));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
})
    .put(async (req, res) => {
    const { categoryId } = req.params;
    const { title, photo, isVisible, menuId } = req.body;
    const id = parseInt(categoryId, 10);
    const updatedCategory = await categoryService.updateById(parseInt(categoryId, 10), { id, title, photo, isVisible, menuId });
    if (updatedCategory) {
        res.json(Category.toResponse(updatedCategory));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const { categoryId } = req.params;
    const categoryDeleted = await categoryService.deleteById(parseInt(categoryId, 10));
    if (categoryDeleted) {
        res.json(StatusCodes.OK);
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
});
router.route('/:categoryId/dishes')
    .get(async (req, res) => {
    const { categoryId } = req.params;
    const dishes = await categoryService.getDishesByCategoryId(parseInt(categoryId, 10));
    if (dishes) {
        res.json(dishes.map((dish) => Dish.toResponse(dish)));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Dishes not found' });
    }
});
export default router;
//# sourceMappingURL=category.router.js.map