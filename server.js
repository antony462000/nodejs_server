const { createServer } = require('node:http');

const port = 3000;

const server = createServer((req, res) => {
    if (req.method == 'GET' && req.url == '/user/list') {
        // TODO write user list logics
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user listed successfully');
    }
    else if(req.method == 'POST' && req.url == '/user/login') {
        // TODO write user login logics
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user Logged in successfully');
    }
    else if(req.method == 'PUT' && req.url == '/user/update') {
        // TODO write user login logics
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user Updated in successfully');
    }
    else if(req.method == 'PATCH' && req.url == '/user/edit') {
        // TODO write user edit logics
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user Edited in successfully');
    }
    else if(req.method == 'DELETE' && req.url == '/user/delete') {
        // TODO write user login logics
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('user Deleted in successfully');
    } 

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});