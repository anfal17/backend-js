const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<h1>Hello , NodeJs!</h1>')
    }else if(req.url == '/about'){
        res.write(`<p>About page</p>`)
    }
    res.end()
})

server.listen(4586)
console.log(`the http server is running on port 5000`)

