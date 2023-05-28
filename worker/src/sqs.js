import AWS from "aws-sdk";
import config from "./config.js";

AWS.config.update({ region: "us-east-1" });

const SQS = new AWS.SQS({ apiVersion: "latest" });

const readMessageParams = {
  QueueUrl: config.SQS_QUEUE_URL,
  MaxNumberOfMessages: 10,
  WaitTimeSeconds: 5,
};

/**
 * Reads a Message from SQS.
 * @returns {Promise<Record<string, unkown>>} message
 */
function readMessage() {
  return new Promise((resolve, reject) => {
    SQS.receiveMessage(readMessageParams, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

/**
 * Deletes a Message from SQS.
 * @param {string} messageReceiptHandle 
 * @returns {Promise}
 */
function deleteMessage(messageReceiptHandle) {
  const params = {
    QueueUrl: config.SQS_QUEUE_URL,
    ReceiptHandle: messageReceiptHandle,
  }

  return new Promise((resolve, reject) => {
    SQS.deleteMessage(params, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

export { readMessage, deleteMessage };
