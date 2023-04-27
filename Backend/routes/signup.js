const express = require('express')
const router = express.Router()


const signupData = require('../model/signupModel')

// signup

router.post('/', async (req,res)=>{
    

    try {
        let item = req.body

        let mail = item.email
        let pass = item.password

        console.log(item, mail,pass);

        const datas = await signupData.find({email:mail})
        if(datas == '' && mail !='' && pass != ''){
            console.log(datas);
            const data = new signupData(item)
            await data.save()
            res.json({status:'1'})
            console.log('data saved to DB');
        }
        else if(mail =='' || pass == ''){
            console.log('please enter data');
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
// get all signup details : admin use only
router.get('/admin/signupdetails', async (req,res)=>{
    let data = await signupData.find()
    res.json(data)
})




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