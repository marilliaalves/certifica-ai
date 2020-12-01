const express = require("express")
const router = express.Router()
const controller = require("../controllers/certifiedController")


router.get("/", controller.getAllCertifies)


module.exports = router