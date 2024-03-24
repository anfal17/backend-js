const http = require('http');
const { hostname } = require('os');

const PORT = 5000;
const HOSTNAME = 'localhost'

const server = http.createServer((res, req) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','plain/text')
    res.end('Node Server created Anfal sharief')
})

server.listen(PORT , () => {
    console.log(`Server running at ${HOSTNAME}:${PORT}`)
})