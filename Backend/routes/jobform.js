const express = require('express')
const router = express.Router()

const jobpost = require('../model/jobformModel')

// signup

router.post('/', async (req,res)=>{
    

    try {
        let item = req.body
        console.log(item);


        if(item !=''){
            const data = new jobpost(item)
            await data.save()
            res.json({status:'1'})
            console.log('one jobpost data added to db');
        }
        else{
            console.log("data alredy exist");
            res.json({status:'data alredy exist'})
        }
        
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




router.get("/jobDetails/:id", (req, res) => {
    const id = req.params.id;
    jobpost.findOne({ _id: id }).then((alumni) => {
      res.send(alumni);
    }); 
  });

  // Update Alumini Profiles details
  router.put("/singleJobDetails", (req, res) => {
    var id = req.params.id;
    var Company_Logo = req.params.Company_Logo;
    var Company_Name = req.params.Company_Name;
    var Job_Title = req.params.Job_Title;
    var Job_locaion = req.params.Job_locaion;
    var start_Date = req.params.start_Date;
    var Salary = req.params.Salary;
    var Employment_Type = req.params.Employment_Type;
    var description = req.params.description;
  
  
  
    console.log(req.body);
    (id = req.body._id),
      (Company_Logo = req.body.firstname),
      (lastname = req.body.lastname),
      (email = req.body.email),
      (phone = req.body.phone),
      (highestQualification = req.body.highestQualification),
      (course = req.body.course),
      (batch = req.body.batch),
      (placementStatus = req.body.placementStatus),
      (companyName = req.body.companyName),
  
      jobpost
        .findByIdAndUpdate(
          { _id: id },
          {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                highestQualification:req.body.highestQualification,
                course:req.body.course,
                batch:req.body.batch,
                placementStatus:req.body.placementStatus,
                companyName:req.body.companyName,
            },
          }
        )
        .then(() => {
          res.send();
        });
  });
  

  module.exports = router