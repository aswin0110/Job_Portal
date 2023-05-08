const express = require('express')
const router = express.Router()

// signup
router.use('/signup',require('./signupal'))

// employer signup
router.use('/employersignup',require('./employersignup'))

// employer account count
router.use('/count', require('./countemployerac'))

// alumni account count
router.use('/countalumni', require('./countalumniac'))

router.use('/login', require('./loginApi'))

// login
// router.use("/users", require("./users"));

// get profile for admin dashboard
router.use('/data/alumni', require('./admindashboard'))

// jobpostform
router.use('/jobpost', require('./jobform'))

// manageemployee
router.use('/manageemployee', require('./manageemployee'))

// employerfrontpg coursecount
router.use('/countcourse', require('./coursecount'))

// alumni profile manage account: /alumni/alumniprofile
router.use('/alumnidb', require('./aluminiProfileDetails'))

// get admin name in dashboard
router.use('/apiadmin', require('./admindashboard'))


// get all alumni applied job post details to admin verify
router.use('/apijobapply', require('./admindashboard'))

// not for frontend
router.use('/deletejobapplies', require('./admindashboard'))

// verify alumni appied job post 
router.use('/verifyjobapplies', require('./admindashboard'))

// get admin name in a dashboard when id matches
router.use('/getnameadmin', require('./admindashboard'))

// alumni profile get
router.use('/alumni', require('./admindashboard'))

router.use('/posttocareer', require('./coursecount'))


// alumni services

router.use('/addAlumniProfileDetails' , require('./aluminiProfileDetails'))


router.use('/alumniDetails', require('./aluminiProfileDetails'))

router.use('/alumniProfileUpdate', require('./aluminiProfileDetails'))

router.use('/alumniprofile', require('./aluminiProfileDetails'))

module.exports = router