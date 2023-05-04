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
    },
    Employment_Type:{
        type:String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now,
        get: function(date) {
          // This function formats the date as "dd/mm/yyyy"
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const year = date.getFullYear().toString();
          return `${day}/${month}/${year}`;
        }
      }
})
    
let JobDATA = Mongoose.model('jobdetails',JobSchema)

module.exports = JobDATA