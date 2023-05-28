import express from "express";
import { v4 } from "uuid";
import { sendMessage } from "./sqs.js";

function createMessageRoutes() {
  const router = express.Router();

  router.post("/", async (req, res, next) => {
    try {
      const msg = {
        id: v4(),
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
      };
      await sendMessage(msg);
      res.status(201).json(msg).end();
    } catch (err) {
      next(err);
    }
  });

  return router;
}

export { createMessageRoutes };
