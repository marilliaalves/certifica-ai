require('dotenv-safe').config();
const express = require("express")
const mongoose = require('mongoose');
const app = express()

mongoose.connect(`${process.env.MONGODB_URL}`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

let db = mongoose.connection;

db.on("error", console.log.bind(console, "connection error:"))
db.once("open", () => console.log("Succesful connection"))

const index = require("./routes/index")
const certifies = require("./routes/certifiedRoute")

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-with, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/certifies", certifies)

module.exports = app
