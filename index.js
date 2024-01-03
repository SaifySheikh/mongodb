
// npm init -y
// npm i express
// npm i mongoose

const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

const User = require("./model/user")

app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://SaifySheikh:Sharif4565@cluster0.xbgnrhv.mongodb.net/EMS").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.get("/", (req, res)=>{
    let a = fs.readFileSync("index.html")
    res.send(a.toString())
})

app.post("/", async(req, res)=>{
    const userData = new User(req.body)
    await userData.save()
    let a = fs.readFileSync("submit.html")
    res.send(a.toString())
})

app.listen(port, ()=>{
    console.log("App Running on port: ", port)
})
