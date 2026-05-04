const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if (req.url == "/products") {

        let data = fs.readFileSync("products.json");

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(data);

    } else {
        res.end("Server running");
    }

}).listen(3000, () => console.log("Server running on http://localhost:3000"))
