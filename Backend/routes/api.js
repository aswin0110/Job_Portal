const express = require('express')
const router = express.Router()


const signupData = require('../model/signupModel')


// signup
router.post('/signup',  async (req,res) =>{
    

    try {

        let data = req.body
        let name = data.email
        let mail = data.email
        let pass = data.password

        // console.log(data, mail, pass);

        let list =await signupData.find({email:mail})
        
        if(list=='' && mail !=''&& pass !=''){
            console.log('1');
            const newUser = new signupData(data)  // checking incoming data with schema
            const savedUser = await newUser.save()
            // console.log(savedUser);
            res.json({status:'1'})
            // res.json({status:'success account created'})
        }
        else if(mail == '' || pass == '' || name == ''){
            console.log('Please enter name, email and password');
            res.json({status:'2'})
            // res.json({status:'Please enter name, email and password'})

        }
        else{
            res.json({status:'mail id alredy exist please try with new one'})
            console.log("mail id alredy exist please try with new one");
        }

        
    } catch (error) {
        console.log(error.message);
        
    }
    

})

// get all signup details : admin use only
router.get('/admin/signupdetails', async (req,res)=>{
    let data = await signupData.find()
    res.json(data)
})


module.exports = router