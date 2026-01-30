// server/server.js
const express = require('express');
const app = express();

// connect mongodb
require('./utils/MongooseUtil');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-access-token');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// routes
app.use('/api/admin', require('./api/admin'));

// test api
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

// port
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
