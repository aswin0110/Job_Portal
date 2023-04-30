// const express = require('express')
// const router = express.Router()

// const manageData = require('../model/manageemployeeModel')

// router.put('/api/manageemployee/:id' , async(req,res)=>{
    
//     try {
        
//         let id = req.params.id

//         let item = {  //to fetch and save data from frontend in server
//             employername : req.body.employername,
//             designation : req.body.designation,
//             email : req.body.email,
//             phonenumber:req.body.phonenumber
//          }
         
      
//          const updateData = { $set :item }

//         const updateEmployee = await manageData.findByIdAndUpdate( id, updateData)
//         res.json({message :'Data updated succesfully'}).status(200)
//         res.send(updateEmployee)
   
//     } catch (error) {
//         console.log(error)
//         res.json({message:error}).status(400) 
//     }
// })









// module.exports = router
