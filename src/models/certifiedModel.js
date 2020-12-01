const mongoose = require("mongoose")
const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const certifiesSchema = new mongoose.Schema({
    name : { type : String},
    email: { type : String },
    class: { type : String },
    institution: { type : String },
    workLoad: { type : String },
    month: { type : String },
    year: { type : Number}
},{
    versionKey: false
})

const certified = new mongoose.model("certifies", certifiesSchema)

module.exports = certified