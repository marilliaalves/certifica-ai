const express = require("express")
const app = express()

app.use(express.json())

//routes - colocar aqui as rotas que vou usar
const allCertifies = require("./routes/certifiedRoute")

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-with, Content-Type, Accept"
    )
    next()
})

app.use("/", allCertifies)

module.exports = app
