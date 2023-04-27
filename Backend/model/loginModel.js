const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const LoginSchema = new Schema({

    email:{
        type:String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

})

let loginData = mongoose.model('logincredential', LoginSchema);

module.exports = loginData