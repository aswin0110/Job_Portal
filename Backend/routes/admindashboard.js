const express = require('express')
const router = express.Router()

const profile = require('../model/alumniModel')
const signupdata = require('../model/signupModel')

// for admin dashboard: get total alumni acounts count
router.post('/', async (req, res) => {
    try {
        let item = req.body
        let mail = item.email
      const data = await profile.find({email:mail});
      const datasignup = await signupdata.find({email:mail});

      res.send({data,datasignup});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }

    


  });

  
  module.exports = router