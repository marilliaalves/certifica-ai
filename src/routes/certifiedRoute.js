const express = require("express")
const router = express.Router()
const controller = require("../controllers/certifiedController")


router.get("/certifies", controller.getAllCertifies)
router.get("/certifies/:id", controller.getById)
router.get("/certifies/year/:year", controller.getYear)
router.post("/certifies", controller.postCertifies) 
router.put("/certifies/:id", controller.putCertifies) 
router.delete("/certifies/:id", controller.deleteId) 



module.exports = router