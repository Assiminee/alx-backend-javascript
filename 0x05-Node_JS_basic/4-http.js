const { createServer } = require('http')

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1');

module.exports = app;