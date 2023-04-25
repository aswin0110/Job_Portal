const express = require('express')
const router = express.Router()


const signupData = require('../model/signupModel')


// signup
router.post('/',  async (req,res) =>{
    

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

router.post('/signup', async (req,res)=>{
    

    try {
        let item = req.body

        let mail = item.email
        let pass = item.password

        console.log(item, mail,pass);

        const datas = await signupData.find({email:mail})
        if(datas == '' && mail !='' && pass != ''){
            console.log(datas);
        }
        else{
            console.log("1");
        }
        // else if(item== null ) throw ('no data')

        // const data = new signupData(item)
        // await data.save()
        
        // res.json({ message: 'Data saved successfully' }).status(201)
        
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


module.exports = router