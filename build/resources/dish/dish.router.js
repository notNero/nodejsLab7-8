import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import Dish from './dish.model.js';
import dishService from './dish.service.js';
const router = Router();
router.route('/').get(async (_req, res) => {
    const dish = await dishService.getAll();
    res.json(dish.map(Dish.toResponse));
});
router.route('/').post(async (req, res) => {
    const { id, title, photo, isPublish, ingredients, price, categoryId } = req.body;
    const dish = await dishService.create({ id, title, photo, isPublish, ingredients, price, categoryId });
    if (dish) {
        res.status(StatusCodes.CREATED).json(Dish.toResponse(dish));
    }
    else {
        res
            .status(StatusCodes.BAD_REQUEST)
            .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:dishId').get(async (req, res) => {
    const { dishId } = req.params;
    const dish = await dishService.getById(parseInt(dishId, 10));
    if (dish) {
        res.json(Dish.toResponse(dish));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
    }
});
router.route('/:dishId').put(async (req, res) => {
    const { dishId } = req.params;
    const { title, photo, isPublish, ingredients, price, categoryId } = req.body;
    const id = parseInt(dishId, 10);
    const dish = dishService.updateById(parseInt(dishId, 10), { id, title, photo, isPublish, ingredients, price, categoryId });
    if (dish) {
        res.json(Dish.toResponse(dish));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:dishId').delete(async (req, res) => {
    const { dishId } = req.params;
    const dish = dishService.deleteById(parseInt(dishId, 10));
    if (dish) {
        res.json(StatusCodes.OK);
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'dish not found' });
    }
});
export default router;
//# sourceMappingURL=dish.router.js.map