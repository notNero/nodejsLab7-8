import express from 'express';
import menuRouter from './resources/menu/menu.router.js';
import categoryRouter from './resources/category/category.router.js';
import dishRouter from './resources/dish/dish.router.js';
import requestLogger from './middleware/requestLogger.js';
import errorHandler from './middleware/errorHandler.js';
const app = express();
app.use(express.json());
app.use(requestLogger);
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/menu', menuRouter);
app.use('/category', categoryRouter);
app.use('/dish', dishRouter);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map