import * as dotenv from "dotenv";

dotenv.config();

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  SQS_QUEUE_URL: process.env.SQS_QUEUE_URL,
};

export default config;
