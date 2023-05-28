import express from "express";
import errorHandler from "./error_handler.js";
import { createMessageRoutes } from "./message_routes.js";
import authHandler from "./auth_handler.js";
import logger from "./logger.js";
import config from "./config.js";

const app = express();

app.use(express.json());
app.use(authHandler);
app.use("/messages", createMessageRoutes());
app.use(errorHandler);

const server = app.listen(config.PORT, () =>
  logger.info(`Server is running at http://localhost:${process.env.PORT}`)
);
