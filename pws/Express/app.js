const express = require('express')
const app = express()
const port = 5000
const hostname = "localhost"

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/about' , (req,res) => {
    res.send("About page")
})
app.listen(port , ()=>{
    console.log(`Server Up and Running at ${hostname}:${port}`)
})