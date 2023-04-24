const express = require('express')
const router = express.Router()


const signupData = require('../model/signupModel')

router.post('/signup', async (req,res) =>{
    try {
    var data = req.body

    
    let mail = data.email
    let pass = data.password

    // check the email is alredy in there
    const list = await signupData.find({email:mail})
    // console.log(list);
    // console.log("data", data);
    
        
    if(list ==" " && mail !='' && pass !=''){
        const newUser = new signupData(data)
        const saveData = await newUser.save()
        res.json({"status":"1"}) //success

    }
    else if(mail == '' || pass == ''){
        res.json({"status":"2"})
    }
    else{
        res.json({"status":"0"}) //email alredy exist
    }
        
    } catch (error) {
        console.log(error)
        res.json({"status":"2"})
    }
    // res.send(data.name)

})



module.exports = router