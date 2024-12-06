const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        const error = new Error('Database error');
        throw error; // Explicitly throw the error
      }
      res.send('Hello World!');
    } catch (error) {
      console.error('Error in request handler:', error);
      res.status(500).json({ error: error.message });
    }
  }, 1000);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});