const express = require('express')
const router = express.Router()


const signupData = require('../model/signupModel')

// for admin dashboard: get total alumni acounts count
router.get('/data/countalumni', async (req, res) => {
    try {
      const count = await signupData.countDocuments();
      res.send({ count });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  
  module.exports = router