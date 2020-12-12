const express = require("express")
const router = express.Router()
const controller = require("../controllers/certifiedController")


router.get("/certifies", controller.getAllCertifies)
router.get("/certifies/:id", controller.getById)
router.get("/year/:year", controller.getYear)
router.post("/", controller.postCertifies) // inclui novos
router.put("/:id", controller.putCertifies) // altera dados do registro
router.delete("/:id", controller.deleteId) // exclui por id



module.exports = router