import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Dish from '../dish/dish.model';
import Category from './category.model';
import categoryService from './category.service';

const router = Router();


router.route('/')
  .get(async (_req: Request, res: Response) => {
    const categories = await categoryService.getAll();
    res.json(categories.map((category: Category) => Category.toResponse(category)));
  })
  .post(async (req: Request, res: Response) => {
    const { id, title, photo, isVisible, menuId } = req.body;

    const category = await categoryService.create({ id, title, photo, isVisible, menuId });

    if (category) {
      res.status(StatusCodes.CREATED).json(Category.toResponse(category));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  });

router.route('/:categoryId')
  .get(async (req: Request, res: Response) => {
    const { categoryId }= req.params as {categoryId: string};
    const category = await categoryService.getById(parseInt(categoryId, 10));
    if (category) {
      res.json(Category.toResponse(category));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const { categoryId }= req.params as {categoryId: string};
    const { title, photo, isVisible, menuId } = req.body;
    const id = parseInt(categoryId, 10);
    const updatedCategory = await categoryService.updateById(parseInt(categoryId, 10), { id, title, photo, isVisible, menuId });
    if (updatedCategory) {
      res.json(Category.toResponse(updatedCategory));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const { categoryId }= req.params as {categoryId: string};
    const categoryDeleted = await categoryService.deleteById(parseInt(categoryId, 10));
    if (categoryDeleted) {
      res.json(StatusCodes.OK);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  });

router.route('/:categoryId/dishes')
  .get(async (req: Request, res: Response) => {
    const { categoryId }= req.params as {categoryId: string};
    const dishes = await categoryService.getDishesByCategoryId(parseInt(categoryId, 10));
    if (dishes) {
      res.json(dishes.map((dish) => Dish.toResponse(dish)));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Dishes not found' });
    }
  });

export default router;
