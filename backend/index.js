import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});



