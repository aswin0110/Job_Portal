const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const JobSchema = new Schema ({
    Company_Logo:{
        type:String
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
    postdate:{
        type: Date,
		default: Date.now
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
    },
    Employment_Type:{
        type:String,
        required:true
    },
    start_Date: {
        type: Date,
        require:true

      }
})
    
let JobDATA = Mongoose.model('jobdetails',JobSchema)

module.exports = JobDATA