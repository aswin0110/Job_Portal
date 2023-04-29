const express = require('express')
const router = express.Router()

const jobpost = require('../model/jobformModel')

// signup

router.post('/', async (req,res)=>{
    

    try {
        let item = req.body
        console.log(item);


        if(item !=''){
            const data = new jobpost(item)
            await data.save()
            res.json({status:'1'})
            console.log('one jobpost data added to db');
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
// router.get('/admin/signupdetails', async (req,res)=>{
//     let data = await signupData.find()
//     res.json(data)
// })



// {
//     "Company_Logo":"https://iaccessibility.net/wp-content/uploads/2018/04/indeed-employer-logo.png",
//     "Company_Name":"test2",
//     "Job_Title":"test",
//     "Job_locaion":"test",
//     "start_Date":"tset",
//     "Salary":"65200",
//     "Employment_Type":"full time",
//     "description":"sdfslkdfksdnj"
    
    
//   }



  module.exports = router