import logger from './utils/logger';
import app from './app'; // Импортируем Express-приложение из файла app.ts

// import { PORT } from './common/config'; // Импортируем порт из common/config.ts


process.on('uncaughtException', (error: Error) => {
    logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
    process.exit(1);
  });
  
  process.on('unhandledRejection', (reason: Error) => {
    logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
    process.exit(1);
  });

const port : number = 4000; // Устанавливаем порт для прослушивания

app.listen(port, () => console.log(`App is running on http://localhost:${port}`));

setTimeout(() => {
    Promise.reject(new Error('Oops! unhandledRejection'));
  }, 2000);