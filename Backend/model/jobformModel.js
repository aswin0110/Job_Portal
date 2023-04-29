const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const JobSchema = new Schema ({
    Company_Name:{
        type:String,
        required:true
    },
    Job_Title:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    },
    Employment_Type:{
        type:String,
        required:true
    }
})
    
let JobDATA = Mongoose.model('jobdetails',JobSchema)

module.exports = JobDATA