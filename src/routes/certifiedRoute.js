const express = require("express")
const router = express.Router()
const controller = require("../controllers/certifiedController")


router.get("/certifies", controller.getAllCertifies)
router.get("/certifies/:id", controller.getById)
router.get("/certifies/year/:year", controller.getYear)
router.post("/certifies", controller.postCertifies) // inclui novos
router.put("/certifies/:id", controller.putCertifies) // altera dados do registro
router.delete("/certifies/:id", controller.deleteId) // exclui por id



module.exports = router