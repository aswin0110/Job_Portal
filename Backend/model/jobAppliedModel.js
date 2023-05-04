const Mongoose = require('mongoose')
const Schema = Mongoose.Schema


const JobAppliedSchema = new Schema ({
    Company_Logo:{
        type:String,
       
    },
    Company_Name:{
        type:String,
        
    },
    Job_Title:{
        type:String,
        
    },
    Job_locaion:{
        type:String,
        
    },
    role: {
        type:String,
        default: 'alumni'
    },
    firstname:{
        type:String,
       
    },
    lastname:{
        type:String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    course: {
        type: String,
        
    },
    highestQualification:{
        type: String,
        
    },
    percentage:{
        type: String,
        
    },
    skills:{
        type: String,
        
    },
    uploadRresume:{
        type: String,
        
    },
    resumeLink:{
        type: String,
        
    },
    adminverify:{
        type:Boolean,
        required:true,
        default:false
    }
})
    
let JobAppliedDATA = Mongoose.model('jobAppliedDetails',JobAppliedSchema)

module.exports = JobAppliedDATA;