const https=require('https');
const fs=require('fs');

htpp.createServer((req,res)=>{
    if(req.url=="/data"){
        let data=fs.readFilesync("data.json");

        res.writeHead(200,{
            "content-type":"application/json",
            "acess-Control-Allow-Origin":"*"
        });
        res.end(data);
    }
    else{
        res.end("suver")
    }
}).listen(3000,()=> console.log("server running on https://localhost:3000"))