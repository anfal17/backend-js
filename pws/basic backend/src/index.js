import app from "./app.js"
const port = 5000

//database connection - mongodb
//database is in another continent - use async await
import mongoose from "mongoose"
// mongoose.connect('mongodb://127.0.0.1:27017/test')

//use iffy while calling adatabase
(async ()=>{
   try{
        //db connection
        await mongoose.connect('dbstring')
        console.log("DB connected succesfully")

        app.on("Error ", (err)=> {
            console.log("Error: ", err)
            throw err
        } )

        const onListening = () =>{
            console.log(port, onListening)
        }
        
   }catch(error){
        console.log("Errror: ", err)
        throw err
   } 
})()


app.listen(port , ()=>{
    console.log(`Server up and running at localhost:${port}`)
})