const express = require('express')
const router = express.Router()

// signup
router.use('/signup',require('./signup'))

// employer signup
router.use('/employersignup',require('./employersignup'))






module.exports = router