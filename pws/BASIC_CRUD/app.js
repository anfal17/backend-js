require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const connectToDb = require("./config/db.js");


//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

//init connection to db
connectToDb();

const userRoutes = require('./routes/userRoutes.js')

app.use('/', userRoutes)

// app.get("/", (req, res) => {
//   res.send("Hrllo , World");
// });

module.exports = app;
