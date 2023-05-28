import { readMessage, deleteMessage } from "./sqs.js";
import logger from "./logger.js";

function mapMessageBatch(msgs) {
  return msgs.Messages.map((msg) => ({
    messageId: msg.MessageId,
    receiptHandle: msg.ReceiptHandle,
    msg: JSON.parse(msg.Body),
  }));
}

async function processBatch(batch) {
  if (batch.Messages?.length > 0) {
    logger.info(`Processing ${batch.Messages?.length} messages...`);
    const msgs = mapMessageBatch(batch);
    const deleteMsgs = msgs.map((msg) => deleteMessage(msg.receiptHandle))
    await Promise.all(deleteMsgs)
    logger.info(`${batch.Messages?.length} messages processed.`);
  } else {
    logger.info('Batch is empty.')
  }
}

async function main() {
  while (true) {
    logger.info("Reading new messages...");
    const batchs = await Promise.all([readMessage(), readMessage(), readMessage()]);
    const batchProcessing = batchs.map(batch => processBatch(batch));
    await Promise.all(batchProcessing);
  }
}

main();
