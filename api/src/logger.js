import pino from "pino";
import config from "./config.js";

const logger = pino({
  level: config.LOG_LEVEL,
});

pino.multistream([{ stream: process.stdout }]);

export default logger;
