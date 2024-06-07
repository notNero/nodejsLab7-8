import express, { Express, Request, Response, NextFunction } from 'express';
import menuRouter from "./resources/menu/menu.router"; 
import categoryRouter from "./resources/category/category.router"; 
import dishRouter from "./resources/dish/dish.router";
import requestLogger from './middleware/requestLogger';
import errorHandler from './middleware/errorHandler';

const app: Express = express();

app.use(express.json());
app.use(requestLogger);
// Middleware для обработки запросов к корневому URL
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

// Подключаем маршрутизаторы для различных ресурсов
app.use('/menu', menuRouter);
app.use('/category', categoryRouter);
app.use('/dish', dishRouter);

app.use(errorHandler);


export default app;
