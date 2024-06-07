import logger from '../utils/logger.js';
const errorHandler = (err, _req, res, next) => {
    logger.error(`Unhandled error: ${err.message}`, { stack: err.stack });
    res.status(500).json({ message: 'Internal Server Error' });
    next();
};
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map