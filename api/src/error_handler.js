import logger from "./logger.js";

function errorHandler(err, req, res, next) {
  logger.error(err);
  res.status(500).json({ message: "INTERNAL_SERVER_ERROR" }).end();
}

export default errorHandler;
