const mongoose = require("mongoose")
// const mongoDB = 'mongodb://127.0.0.1:27017';
// mongoose.connect(mongoDB, {  useNewUrlParser: true,
//    useUnifiedTopology: true   });

const certifiesSchema = new mongoose.Schema({
    id : { type : Number },
    name : { type : String},
    email: { type : String , required: true},
    class: { type : String },
    institution: { type : String },
    area: { type : String },
    workLoad: { type : Number },
    month: { type : String },
    year: { type : Number}
},{
    versionKey: false
})

const certifies = mongoose.model("certifies", certifiesSchema)

module.exports = certifies