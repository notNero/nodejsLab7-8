import logger from './utils/logger.js';
import app from './app.js';
process.on('uncaughtException', (error) => {
    logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
    process.exit(1);
});
process.on('unhandledRejection', (reason) => {
    logger.error(`Unhandled Rejection: ${reason.message}`, { stack: reason.stack });
    process.exit(1);
});
const port = 4000;
app.listen(port, () => console.log(`App is running on http://localhost:${port}`));
setTimeout(() => {
    Promise.reject(new Error('Oops! unhandledRejection'));
}, 2000);
//# sourceMappingURL=server.js.map