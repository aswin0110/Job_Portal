const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    
    name:{
        type:String
    },
    email:{
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})

let signupData = mongoose.model('signupcredential', SignupSchema);

module.exports = signupData