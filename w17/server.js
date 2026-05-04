const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    if(req.url == "/data") {

        let data = fs.readFileSync("employees.json");

        res.writeHead(200, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(data);
    }

}).listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});