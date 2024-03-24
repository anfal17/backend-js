const http = require('http')

const PORT = 5000
const HOST  = "localhost"

const server = http.createServer((req, res) => {

    if(req.url == '/' || req.url == '/home'){
        res.write("Welcome to home")
        res.end()
    }else if(req.url == '/about'){
        resa.write("About Page")
        res.end()   
    }
    else if(req.url == "/contact"){
        res.write("Conatcs Page")
        res.end()
    }else{
        res.write("page not found")
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Server Up at ${HOST}:${PORT}`)
})