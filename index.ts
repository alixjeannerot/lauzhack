import http = require('http');
import os = require('os');
import fs = require('fs');

class HttpServer {
    nodePort: number;

    constructor (port: number) {
        this.nodePort = port;
    }

    onRequest(request: http.IncomingMessage, response: http.ServerResponse) {
        response.writeHead(200);
        response.write("Hello World");
        response.end();
    }

    onStart() {
        let httpServer = http.createServer(this.onRequest);
        httpServer.listen(this.nodePort);
        console.log('Server listening on http://' + os.hostname() + ':' + this.nodePort + '/');
    }
}

new HttpServer(8080).onStart();