import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
  res.status(500).json({ message: 'Internal Server Error' });
  next();
};

export default errorHandler;