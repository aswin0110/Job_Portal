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

router.use('/addAluminiProfileDetails',require('./aluminiProfileDetails'))





module.exports = router