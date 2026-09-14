const express = require('express');
const app = express();
const path = require('path');
// Middleware to parse JSON
app.use(express.json());
// Serve static files (HTML)
app.use(express.static('public'));
// API to receive fruit data
app.post('/addFruit', (req, res) => {
const { name, price } = req.body;
console.log("Received Data:");
console.log("Fruit:", name);
console.log("Price:", price);
res.send("Fruit data received successfully!");
});
// Start server
app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});