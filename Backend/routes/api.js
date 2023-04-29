const express = require('express')
const router = express.Router()

// signup
router.use('/signup',require('./signup'))

// employer signup
router.use('/employersignup',require('./employersignup'))

// employer account count
router.use('/count', require('./countemployerac'))

// alumni account count
router.use('/countalumni', require('./countalumniac'))

router.use('/auth', require('./login'))

// login
router.use("/users", require("./users"));

// get profile for admin dashboard
router.use('/data/alumni', require('./admindashboard'))

// jobpostform
router.use('/job', require('./jobform'))


module.exports = router