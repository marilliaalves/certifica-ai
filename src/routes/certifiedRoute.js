const express = require("express")
const router = express.Router()
const controller = require("../controllers/certifiedController")


router.get("/", controller.getAllCertifies)
router.get("/:id", controller.getById)
router.get("/year/:year", controller.getYear)
router.post("/", controller.postCertifies) 
router.put("/:id", controller.putCertifies) 
router.delete("/:id", controller.deleteId) 



module.exports = router