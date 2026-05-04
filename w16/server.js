const express = require('express');
const path = require('path');

const app = express();


// Static folder serve
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});