const express = require('express')
const router = express.Router()

// signup
router.use('/alumnisignup',require('./alumnisignup'))

// employer signup
router.use('/employersignup',require('./employersignup'))

// employer account count
router.use('/count', require('./countemployerac'))

// alumni account count
router.use('/countalumni', require('./countalumniac'))

router.use('/auth', require('./login'))


router.use("/users", require("./users"));



module.exports = router