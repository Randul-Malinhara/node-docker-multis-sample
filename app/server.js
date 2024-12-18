// app/server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const morgan = require('morgan');
app.use(morgan('dev')); // Logging middleware
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from Node.js Dockerized App!');
});

app.get('/about', (req, res) => {
    res.send('This is a Node.js app demonstrating Docker multi-stage builds.');
  });
  
  app.get('/api/data', (req, res) => {
    const sampleData = [
      { id: 1, name: 'Alice', role: 'Engineer' },
      { id: 2, name: 'Bob', role: 'Designer' },
      { id: 3, name: 'Charlie', role: 'Manager' },
    ];
    res.json(sampleData);
});

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/api/message', (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: 'Please provide a name and message' });
  }

  res.json({ success: true, name, message });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 404 Route
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
