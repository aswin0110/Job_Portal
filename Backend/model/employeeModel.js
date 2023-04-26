const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
    role: {
        type:String,
        default: 'employer'
    },
    link:{
        type:String
    },
    companyname:{
        type:String,
        require: true
    },
    hrname:{
        type:String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }

})

let EmployerData = mongoose.model('Employercredential', EmployerSchema);

module.exports = EmployerData