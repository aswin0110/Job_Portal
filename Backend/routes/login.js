const express = require('express')
const router = express.Router()

const loginData = require('../model/loginModel')

const jwt = require('jsonwebtoken')
router.post('/' ,async (req,res)=>{

    try {
        let { email,password } =req.body
    console.log(req.body)
    if(email=='aparnaraji2000@gmail.com' && password =='aparna123'){
        let payload ={email:email,password:password}
        let token = jwt.sign(payload,'ilikeapples13')
        console.log(token)
        res.status(200).json({ message: 'Authentication successful',status:200,token:token })
    }
    else{
        throw('unauthorized')
    }
    } 
    catch (error) {
        console.log(error)
     res.status(400).json({message:error})
    }
       
   })



  module.exports = router
