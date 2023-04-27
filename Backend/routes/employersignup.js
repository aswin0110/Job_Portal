const express = require('express')
const router = express.Router()


const EmployerSignupModel = require('../model/employeeModel')


// employer signup account through admin
router.post('/', (req,res)=>{
    // let data = req.body
    let data = new  EmployerSignupModel(req.body)
    data.save()
    res.json({status:'1'})


})

// get all employer details : admin use only
router.get('/admin/employerdetails', async (req,res)=>{
    let data = await EmployerSignupModel.find()
    res.json(data)
})

module.exports = router