const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function ( req, res ) {
    const q = url.parse(req.url, true);
    console.log(q.pathname);
    if (q.pathname == '/') q.pathname = '/index';
    if (q.pathname == '/favicon.ico') return;
    const filename = `./templates${q.pathname}.html`;
    try {
        const data = fs.readFileSync(filename);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    } catch (err) {
        fs.readFile('./templates/404.html', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
              } 
              console.log(data);
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
        })
    }

}).listen(8080);