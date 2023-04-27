const express = require('express')
const router = express.Router()



const AluminiModel = require('../model/alumniModel')


router.post("/addAluminiProfileDetails", (req, res) => {
    let AluminiProflieDetails = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };
    let addAluminiData = AluminiModel(AluminiProflieDetails);
    addAluminiData.save();
  
    AluminiModel.find().then((addAluminiData) => {
      res.send(addAluminiData);
    });
  });




module.exports = router