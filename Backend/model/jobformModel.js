const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const JobSchema = new Schema ({
    Company_Logo:{
        type:String,
        required:true
    },
    Company_Name:{
        type:String,
        required:true
    },
    Job_Title:{
        type:String,
        required:true
    },
    Job_locaion:{
        type:String,
        required:true
    },
    start_Date:{
        type:String,
        required:true
    },
    Salary:{
        type:String,
        required:true
    
    },
   
    description:{
        type:String,
        required:true
    },
    job_skill:{
        type:String,
        required:true
    }
})
    
let JobDATA = Mongoose.model('jobdetails',JobSchema)

module.exports = JobDATA