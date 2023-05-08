const express = require('express')
const router = express.Router()


const AluminiData = require('../model/alumniModel')

// for admin dashboard: get total alumni acounts count
router.get('/data/countcourse', async (req, res) => {
    try {
      const count = await AluminiData.countDocuments();
      res.send({ count });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  router.get('/data/coursename', async (req, res) => {
    try {
      const name = await AluminiData.countDocuments();
      res.send({ name });
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });


  router.post('/posttocareer', async (req,res)=>{
    

    try {
        let item = req.body
    console.log(item);

    const jobmodels = require('./model/jobformModel')

    const datajobtocareer = new jobmodels(item)
    await datajobtocareer.save()

    res.json({status:'1'})
        
    } catch (error) {
        res.json({error})
        console.log(error.message);
        
    }
})

  module.exports = router