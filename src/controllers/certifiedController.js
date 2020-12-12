const certifies = require('../models/certifiedModel')
const SECRET = process.env.SECRET;

const getAllCertifies = (req, res) => {
    const area = req.query
    certifies.find(area, function (err, certified) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(certified)
        }
    })
}

 const getById = (req, res) => {
    const id = req.params.id
    certifies.find({ id }, function (err, certified) {
        if (err) {
            res.status(404).send('Certificado não encontrado')
        } else {
            res.status(200).send(certified)
        }
    })
}

const createPassword = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10);
  req.body.password = password;
  const certifie = new certifies(req.body);
  certifie.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(201).send(certifie.toJSON())  
    }
  })
}

const loginEmail = (req, res) => {
    certifies.findOne({ email: req.body.email }, function(error, certifie) {
      if (!certifie) {
        return res.status(404).send(`There is no user with this email ${req.body.email}`);
      }
  
      const rightPassword = bcrypt.compareSync(req.body.password, author.password);
  
      if (!rightPassword) {
        return res.status(403).send('Incorrect password!');
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
  
    return res.status(200).send(token);
    });
  }


const getYear = (req, res) => {
    const year = req.params.year
    certifies.find({ year }, function (err, certified) {
        if (err) {
            res.status(404).send('Não há certificados no ano informado')
        } else {
            res.status(200).send(certified)
        }
    })
}

const postCertifies = (req, res) => {
    let certifie = new certifies(req.body)

    certifie.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(201).send({ message: 'Certificado incluído com sucesso' })
        }
    })
}

const putCertifies = (req, res) => {
    const id = req.params.id
    certifies.updateMany({ id }, { $set: req.body }, { upsert: true }, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "certificado atualizado com sucesso" })
        }
    })
}

const deleteId = (req, res) => {
    const id = req.params.id
    certifies.deleteOne({ id }, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "certificado removido com sucesso" })
        }
    })
}


module.exports = {
    getAllCertifies,
    getById,
    loginEmail,
    createPassword,
    getYear,
    postCertifies,
    putCertifies,
    deleteId
}
