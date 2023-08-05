const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const {connection} = require("./db")
const {bookRouter}=require("./routes/book.routes")
const cors=require("cors")
require("dotenv").config()




const app = express();


// app.use(bodyParser.json());

app.use(cors());
app.use(express.json())
app.use("/book",bookRouter)



// for checking
app.get("/",(req,res)=>{
    res.status(200).send("server Running")
})






// running server
app.listen(process.env.port,async(req,res)=>{
    try {
        await connection
        console.log("running on Mongo Atlas")
    } catch (error) {
        console.log({"msg":error.message})
    }
    console.log("running server")
})

