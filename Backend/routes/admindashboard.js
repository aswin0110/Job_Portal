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

  // admin account
  const adminModel = require('../model/adminModel')
  router.post('/account',async (req,res)=>{
    try {
      let item = req.body

      let mail = item.email
      let pass = item.password

      console.log(item, mail,pass);

      const datas = await adminModel.find({email:mail})
      if(datas == '' && mail !='' && pass != ''){
          console.log(datas);
          const data = new adminModel(item)
          await data.save()
          res.json({status:'1'})
          console.log('one singup data added to DB');
      }
      else if(mail =='' || pass == ''){
          console.log('Signup data is blank');
          res.json({status:'2'})
      }
      else{
          console.log("data alredy exist");
          res.json({status:'data alredy exist'})
      }
      
  } catch (error) {
      console.log(error)
      res.json({ message: error }).status(400)
      
  }
  })
  
  // /getnameadmin/adminname
  router.post('/adminname', async (req, res) => {
    const collection = require('../model/adminModel');
  
    let item = { _id: req.body.id };
    let data = await collection.findOne(item, { name: 1, _id: 0 }).exec();
    res.json(data);
    console.log(data);
  });
  
  // get admin name in dashboard
  router.post('/apiadmin', async (req,res) =>{
    const collection = require('../model/adminModel')

    let item = req.body
    let data = await collection.findOne(item, { name: 1, _id: 0 })
    res.json(data)
    console.log(data);
    console.log(data);
})


// wheen the email id matches you can get the data from db
router.get('/apijobapply', async (req,res) =>{
  const jobappliedData = require('../model/jobAppliedModel')
      let item = req.body
      let data = await jobappliedData.find()
      res.json(data)
      console.log(data);
  })


  // when id matches adminverify will change
router.put('/deletejobapplies', async (req,res)=>{
  let item = req.body
  console.log(item,"gfgfg");
  const jobappliedData = require('../model/jobAppliedModel')

  let datas = await jobappliedData.findByIdAndUpdate({_id:item._id}, {adminverify:'reject'})
  res.json({message:'data updated'})

  
})

// when click verify 
router.put('/verifyjobapplies', async (req,res)=>{
  let item = req.body
  console.log(item,"gfgfg");
  const jobappliedData = require('../model/jobAppliedModel')

  let datas = await jobappliedData.findByIdAndUpdate({_id:item._id}, {adminverify:'verified'})
  res.json({message:'data updated'})

})
  module.exports = router