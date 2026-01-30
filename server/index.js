// CLI: npm install express --save
const express = require('express');
const app = express();

// Port
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API routes
app.use('/api/admin', require('./api/admin.js'));

// API test
app.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello from server!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
