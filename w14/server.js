const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// ✅ CORS fix
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// Root route
app.get('/', (req, res) => {
    res.send("Server running! Go to /users");
});

// Users API
app.get('/users', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
        if(err) {
            res.send("Error reading file");
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});