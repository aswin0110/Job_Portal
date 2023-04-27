const express = require('express')
const router = express.Router()


const EmployerSignupModel = require('../model/employeeModel')

// for admin dashboard: get total employee acounts count
router.get('/data/countemployee', async (req, res) => {
    try {
      const count = await EmployerSignupModel.countDocuments();
      res.send({ count });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  
  module.exports = router