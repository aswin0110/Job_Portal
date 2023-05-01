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
router.use("/users", require("./users"));

// get profile for admin dashboard
router.use('/data/alumni', require('./admindashboard'))

// jobpostform
router.use('/jobpost', require('./jobform'))

// manageemployee
// router.use('/manageemployee', require('./manageemployee'))












// alumni profile get
router.use('/alumni', require('./admindashboard'))




module.exports = router