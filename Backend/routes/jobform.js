const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const JobDATA = require('../model/jobformModel')

const jobAppliedModel = require('../model/jobAppliedModel')

router.post('/', async (req, res) => {
  const { Company_Logo,Company_Name,Job_Title, Job_locaion,start_Date,Salary,Employment_Type,description,job_skill} = req.body;

  try {
    const job = await JobDATA.create({ Company_Logo,Company_Name,Job_Title, Job_locaion,start_Date,Salary,Employment_Type,description,job_skill });
    res.json(job);
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// router.post('/', async(req,res)=>{
    
//   try {

//       let item = {  //to fetch and save data from frontend in server
//             Company_Logo: req.body.Company_Logo,
//             Company_Name: req.body.Company_Name,
//             Job_Title: req.body.Job_Title,
//             Job_locaion: req.body.Job_locaion,
//             start_Date: req.body.start_Date,
//             Salary: req.body.Salary,
//             Employment_Type: req.body.Employment_Type,
//             description: req.body.description,
//             job_skill: req.body.job_skill
//          }
       
//           const newJob = new JobDATA(item)   //to check incoming data 
//           const saveJob = await newJob.save()  //mongodb save
//           res.json({ message: 'Data saved successfully' }).status(201)
//           res.send(saveJob)
//         console.log(saveJob)
          
//   } catch (error) {
//       console.log(error)
//       res.json({message:error}).status(400)
//   }
// })






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