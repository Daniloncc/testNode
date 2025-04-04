//const http = require ("http");
import { createServer } from "http";
import  fs  from "fs";

const server = createServer((request, response) => {

    const url = request.url;
    console.log(url);
    
    var content = fs.readFileSync('./404.html', "utf-8");
    var statusCode = 404;

    //loader la page a-propos
    if (url === '/a-propos') {
        content = fs.readFileSync('./a-propos.html', "utf-8");
        statusCode = 200;
    }
    else if (url === '/accueil' || url === "/") {
        content = fs.readFileSync('./accueil.html', "utf-8");
        statusCode = 200;
    }

    response.writeHead(statusCode, {"Content-Type": "text/html"});
    response.write(content);

    response.end();
});

server.listen(3000);