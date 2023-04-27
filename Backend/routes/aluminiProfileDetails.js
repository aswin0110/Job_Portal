const express = require('express')
const router = express.Router()



const AluminiModel = require('../model/alumniModel')


router.post("/addAluminiProfileDetails", (req, res) => {
    let AluminiProflieDetails = {
      role: req.body.role,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phone: req.body.phone,
      highestQualification:req.body.highestQualification,
      course:req.body.course,
      batch:req.body.batch,
      placementStatus:req.body.placementStatus,
      companyName:req.body.companyName,

    };
    let addAluminiData = AluminiModel(AluminiProflieDetails);
    addAluminiData.save();
  
    AluminiModel.find().then((addAluminiData) => {
      res.send(addAluminiData);
    });
  });




module.exports = router;