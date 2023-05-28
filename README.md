# AWS SQS API/Worker Playgrond

To test API performance and also create lots of messages in SQS:
```
ab -n 1000 -c 100 -p msg.json -T "application/json" -H "api-key: 81d6e112-dbb2-58a0-985c-2af8ca1ef92f" http://localhost:3000/messages
```