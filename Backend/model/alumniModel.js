const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AluminiSchema = new Schema({
    role: {
        type:String,
        default: 'alumini'
    },
    firstname:{
        type:String,
        require: true
    },
    lastname:{
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    highestQualification:{
        type: String,
        require: true
    },
    course:{
        type: String,
        require: true
    },
    batch:{
        type: String,
        require: true
    },
    placementStatus:{
        type: String,
        require: true
    },
    companyName:{
        type: String,
        require: true
    }

})

let AluminiData = mongoose.model('AluminiProflieDetails', AluminiSchema);

module.exports = AluminiData;