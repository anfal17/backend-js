const http = require('http')

const port = 5000
const host = "localhost"

const server = http.createServer((req, res)=>{
    //Home page
    // product data from another server

    if(req.url == '/' || req.url == "/home"){
        res.statusCode = 200;
        res.setHeader('Content-Type' , 'text/plain')
        res.end('Welcome to Node Js server by anfal')
    }
    else if(req.url  == "/product"){

        const options = {
            hostname :'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }

        const apiReq = http.request(options , (apiRes) =>{
            apiRes.on("data" , (data)=>{
                res.statusCode = 200
                res.setHeader('Content-Type' , 'application/json')
                res.end(JSON.stringify(data.toString()))
            })
        })

        apiReq.on("error" , ()=>{
            console.log(e)
        })

        apiReq.end()

    }else{
        res.statusCode = 500
        res.setHeader('Content-Type' ,'text/plain')
        res.end("page not found error")
    }
}) 


server.listen(port ,()=>{
    console.log(`Server Up and running at ${host}:${port}`)
})


