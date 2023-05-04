const express = require('express')
const router = express.Router()


const EmployerSignupModel = require('../model/employeeModel')

const JobAppliedDATA = require('../model/jobAppliedModel');

router.put('/employee/:id' , async(req,res)=>{
    
    try {
        
        let id = req.params.id

        let item = {  //to fetch and save data from frontend in server
            role : req.body.role,
            link : req.body.link,
            companyname : req.body.companyname, 
            hrname:req.body.hrname,
            address:req.body.address,
            location:req.body.location,
            email:req.body.email,
            password:req.body.password,

         }
         
      
         const updateData = { $set :item }

        const updateEmployee = await EmployerSignupModel.findByIdAndUpdate( id, updateData)
        res.json({message :'Data updated succesfully'}).status(200)
        return res.send(updateEmployee);
        // console.log(updateEmployee);
   
    } catch (error) {
        console.log(error)
        res.json({message:error}).status(400) 
    }
})




// manage alumni applied job

router.get('/jobs', async (req, res) => {
  try {
    const JobAppliedDATA = await Job.find({ adminverify: true }).exec();
    res.status(200).json(JobAppliedDATA);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router
