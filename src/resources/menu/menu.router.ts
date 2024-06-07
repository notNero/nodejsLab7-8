import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Menu from './menu.model';
import Category from '../category/category.model';
import menuService from './menu.service';

const router = Router();

router.route('/')
  .get(async (_req: Request, res: Response) => {
    const menu = await menuService.getAll();
    res.json(menu.map((menuItem: Menu) => Menu.toResponse(menuItem)));
  })
  .post(async (req: Request, res: Response) => {
    const { id, title, photo, isPublish } = req.body;

    const menu = await menuService.create({ id, title, photo, isPublish });

    if (menu) {
      res.status(StatusCodes.CREATED).json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  });

router.route('/:menuId')
  .get(async (req: Request, res: Response) => {
    const { menuId }= req.params as {menuId: string};
   
    const menu = await menuService.getById(parseInt(menuId, 10));
    if (menu) {
      res.json(Menu.toResponse(menu));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const { menuId }= req.params as {menuId: string};
    const { title, photo, isPublish } = req.body;
    const id = parseInt(menuId, 10);

    const updatedMenu = await menuService.updateById(id, { id, title, photo, isPublish });
    if (updatedMenu) {
      res.json(Menu.toResponse(updatedMenu));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const { menuId }= req.params as {menuId: string};
    const menuDeleted = await menuService.deleteById(parseInt(menuId, 10));
    if (menuDeleted) {
      res.json(StatusCodes.OK);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  });

router.route('/:menuId/categories')
  .get(async (req: Request, res: Response) => {
    const { menuId }= req.params as {menuId: string};
    const categories = await menuService.getCategories(parseInt(menuId, 10));
    if (categories) {
      res.json(categories.map((category: Category) => Category.toResponse(category)));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Menu not found' });
    }
  });

export default router;
