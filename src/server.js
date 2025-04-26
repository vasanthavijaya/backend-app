
const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from Backend API 🚀');
});

app.listen(port, () => {
  console.log(`Backend API listening at http://localhost:${port}`);
});
