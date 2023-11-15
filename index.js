const http = require('http');

http.createServer(function ( req, res ) {
    console.log(req.url);
    let content;
    if(req.url.toLowerCase() === '/about'){
        console.log('hey');
        content = 'hey you are on the about me page'
    }
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(content);
    res.end();
}).listen(8080);