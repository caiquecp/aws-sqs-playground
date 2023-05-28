import AWS from "aws-sdk";
import config from "./config.js";

AWS.config.update({ region: "us-east-1" });

const SQS = new AWS.SQS({ apiVersion: "latest" });

/**
 * Sends a Message to SQS.
 * @param {Record<string, unkown>} message 
 * @returns {Promise}
 */
function sendMessage(message) {
  return new Promise((resolve, reject) => {
    const msgJson = JSON.stringify(message);
    const params = {
      QueueUrl: config.SQS_QUEUE_URL,
      MessageBody: msgJson,
    };
    SQS.sendMessage(params, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

export { sendMessage };
