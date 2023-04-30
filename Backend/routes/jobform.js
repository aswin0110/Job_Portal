const express = require('express')
const router = express.Router()

const jobpost = require('../model/jobformModel')

const jobAppliedModel = require('../model/jobAppliedModel')

// signup

router.post('/', async (req,res)=>{
    

    try {
        let item = req.body
        console.log(item);


        
            const data = new jobpost(item)
            await data.save()
            res.json({status:'1'})
            console.log('one jobpost data added to db');
        
        
        
    } catch (error) {
        console.log(error)
        res.json({ message: error }).status(400)
        
    }
})
// get all signup details : admin use only
// router.get('/admin/signupdetails', async (req,res)=>{
//     let data = await signupData.find()
//     res.json(data)
// })



// {
//     "Company_Logo":"https://iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png",
//     "Company_Name":"test2",
//     "Job_Title":"test",
//     "Job_locaion":"test",
//     "start_Date":"tset",
//     "Salary":"65200",
//     "Employment_Type":"full time",
//     "description":"sdfslkdfksdnj"
    
    
//   }

// career get request main page

// Read All job detsils
router.get("/JobDetails", (req, res) => {
    jobpost.find().then((jobData) => {
      res.send(jobData);
    });
  });



// Get job details of particular id
router.get("/jobDetails/:id", (req, res) => {
    const id = req.params.id;
    jobpost.findOne({ _id: id }).then((alumni) => {
      res.send(alumni);
    }); 
  });

  // add the job applied to collection in cluting job details
  router.post('/appliedJob', (req,res)=>{
    // let data = req.body
    let data = new  jobAppliedModel(req.body)
    data.save()
    res.json({status:'1'})
})

  




  module.exports = router