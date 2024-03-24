import express from "express"

const app = express()

app.get('/' , (req, res)=>{
    res.send("hello World")
})

app.get("/instagram" , (req, res)=> {
    res.send('<h1>You have visited instagram</h1>')
})


export default app
// mongodb+srv://mongodb:mongodb@cluster0.9ey0pv1.mongodb.net/todoapp

// /*
// - got to mongodb atlas create user , netweork access
// - from the cluster paste the url
// -use mongoose and express

// */