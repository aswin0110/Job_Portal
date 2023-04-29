const express = require('express')
const router = express.Router()



const AlumniModel = require('../model/alumniModel')

// Alumini profile creating post operation
// router.post("/addAlumniProfileDetails", (req, res) => {
//     let AlumniProflieDetails = {
//       role: req.body.role,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       email: req.body.email,
//       phone: req.body.phone,
//       highestQualification:req.body.highestQualification,
//       course:req.body.course,
//       batch:req.body.batch,
//       placementStatus:req.body.placementStatus,
//       companyName:req.body.companyName,
//       password:req.body.password,

//     };
//     let addAlumniData = AlumniModel(AlumniProflieDetails);
//     addAlumniData.save();
  
//     AlumniModel.find().then((addAlumniData) => {
//       res.send(addAlumniData);
//     });
//   });


// Alumini Profiles get and update
// get for update to find id alumini details
router.get("/alumniDetails/:id", (req, res) => {
  const id = req.params.id;
  AlumniModel.findOne({ _id: id }).then((alumni) => {
    res.send(alumni);
  }); 
});
// Update Alumini Profiles details
router.put("/alumniProfileUpdate", (req, res) => {
  var id = req.params.id;
  var firstname = req.params.firstname;
  var lastname = req.params.lastname;
  var email = req.params.email;
  var phone = req.params.phone;
  var highestQualification = req.params.highestQualification;
  var course = req.params.course;
  var batch = req.params.batch;
  var placementStatus = req.params.placementStatus;
  var companyName = req.params.companyName;



  console.log(req.body);
  (id = req.body._id),
    (firstname = req.body.firstname),
    (lastname = req.body.lastname),
    (email = req.body.email),
    (phone = req.body.phone),
    (highestQualification = req.body.highestQualification),
    (course = req.body.course),
    (batch = req.body.batch),
    (placementStatus = req.body.placementStatus),
    (companyName = req.body.companyName),

    AlumniModel
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





module.exports = router;