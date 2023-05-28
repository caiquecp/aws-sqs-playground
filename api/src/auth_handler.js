import config from "./config.js";

function authHandler(req, res, next) {
  if (req.headers["api-key"] !== config.API_KEY) {
    res.status(403).json({ message: "FORBIDDEN" }).end();
  } else {
    next();
  }
}

export default authHandler;
