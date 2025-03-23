const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Load JSON data
const items = require('./data/items.json');

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
