const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// API route
app.get('/employees', (req, res) => {
    fs.readFile(path.join(__dirname, 'employees.json'), 'utf8', (err, data) => {
        if (err) {
            res.send("Error reading file");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});