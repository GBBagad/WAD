const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

console.log("Starting server...");

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Root route (important)
app.get('/', (req, res) => {
    res.send("Server is running");
});

// Products API
app.get('/products', (req, res) => {
    fs.readFile(path.join(__dirname, 'products.json'), 'utf8', (err, data) => {
        if (err) {
            console.log("File error:", err);
            return res.send("Error reading file");
        }

        res.json(JSON.parse(data));
    });
});

// 🔥 IMPORTANT: listen LAST
app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});