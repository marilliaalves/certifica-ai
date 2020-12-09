const certifies = require('../models/certifiedModel')
const  certifiedModel  = require('../models/certifiedModel')
const SECRET = process.env.SECRET;

const login = (req, res) => {
    authors.findOne({ email: req.body.email }, function(error, author) {
      if (!author) {
        return res.status(404).send(`There is no author with this email ${req.body.email}`);
      }
  
      const rightPassword = bcrypt.compareSync(req.body.password, author.password);
  
      if (!rightPassword) {
        return res.status(403).send('Incorrect password!');
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
      return res.status(200).send(token);
    });
  }




 const getAllCertifies = (req, res) => {
     certifiedModel.find(function (err, certified) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(certified)
        }
  })
 } 

 const getById = (req, res) => {
   const id = req.params.id
   certifiedModel.find({ id }, function (err, certified) {
       if (err) {
           res.status(404).send('Certificado não encontrado')
       } else {
           res.status(200).send(certified)
       }
   })
}

const getArea = (req, res) => {
    
    const area = req.query.area
    console.log(area)
    certifiedModel.find(area, function (err, certified) {
        if (err) {
            res.status(501).send('Area não encontrada')
        } 
    }); return res.status(200).send(certified)
    
}

//calcular tempo total 


const getYear = (req, res) => {
    const year = req.params.year
    certifiedModel.find({ year }, function (err, certified) {
        if (err) {
            res.status(404).send('Não há certificados no ano informado')
        } else {
            res.status(200).send(certified)
        }
    })
}

const postCertifies = (req, res) => {
    let certifiedModel = new certifies(req.body)

    certifiedModel.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message : 'Certificado incluído com sucesso'})
        }
    })
}

const putCertifies = (req, res) => {
    const id = req.params.id
    certifiedModel.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "certificado atualizado com sucesso"})
        }
    })
}

const deleteId = (req, res) => {
    const id = req.params.id
    certifiedModel.deleteMany({ id }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "certificado removido com sucesso"})
        }
    })
}


module.exports = {
    login,
    getAllCertifies,
    getById,
    getArea,
    getYear,
    postCertifies,
    putCertifies,
    deleteId
}
  