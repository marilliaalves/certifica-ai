const  certifiedModel  = require('../models/certifiedModel')

 const getAllCertifies = (req, res) => {
     certifiedModel.find(function (err, certified) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(certified)
        }
  })
 }






module.exports = {
    getAllCertifies
  }
  