const express = require('express')
const router = express.Router()

const profile = require('../model/alumniModel')
const signupdata = require('../model/signupModel')

const aluprof = require('../model/alumniModel')

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


  // get alumni student profile data 
  router.post('/alumniprof',async (req,res)=>{
    let item=req.body


    let profile = await aluprof.find({email:item.email});
    
    res.json({profile})
    console.log(profile)
 


  })

  
  module.exports = router