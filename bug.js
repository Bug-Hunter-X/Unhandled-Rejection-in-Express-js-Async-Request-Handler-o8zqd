const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      // Simulate a database error
      const error = new Error('Database error');
      // Express.js will not automatically handle errors in async callbacks
      // If not handled here, it will cause a crash.
      res.status(500).json({ error: error.message });
    } else {
      res.send('Hello World!');
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});