const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    role: {
        type:String,
        default: 'admin'
    },
    name:{
        type:String,
        require: true
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

let adminData = mongoose.model('admincredential', adminSchema);

module.exports = adminData