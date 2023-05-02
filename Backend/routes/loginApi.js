// const express = require('express')
// const router = express.Router()


// const jwt = require('jsonwebtoken')
// router.post('/' ,async (req,res)=>{

//     try {
//         let { email,password } =req.body
//     console.log(req.body)
//     if(email=='aparnaraji2000@gmail.com' && password =='aparna123'){
//         let payload ={email:email,password:password}
//         let token = jwt.sign(payload,'ilikeapples13')
//         console.log(token)
//         res.status(200).json({ message: 'Authentication successful',status:200,token:token })
//     }
//     else{
//         throw('unauthorized')
//     }
//     } 
//     catch (error) {
//         console.log(error)
//      res.status(400).json({message:error})
//     }
       
//    })



//   module.exports = router

const express = require('express')
const router = express.Router()

var jwt = require('jsonwebtoken');
const CODE = "this is a job portal application"
const userModel = require('../model/signupModel')
const emplModel = require('../model/employeeModel')

router.post('', async(req, res)=>{  
    try {

        let data = req.body
        console.log(data)
        let dataFromDB = await userModel.find({email : data.email})
        let dataFromDBemplo = await emplModel.find({email : data.email})

        if(dataFromDB != "" ){
            console.log("from db ",dataFromDB);
            if(dataFromDB[0].password != data.password){
                console.log("Invalid credentials")
                res.json({"status" : "2"})
            }
            
            else{
                console.log("login successful")
                let payload = {
                    'email': data.email,
                    'password': data.password
                }
                let token = jwt.sign(payload,CODE)
                res.status(200).send([dataFromDB,token]) 
                
            }

        }
        
        else if( dataFromDBemplo!=""){

            console.log("from db ",dataFromDBemplo);
            if(dataFromDBemplo[0].password != data.password){
                console.log("Invalid credentials")
                res.json({"status" : "2"})
            }
            
            else{
                console.log("login successful")
                let payload = {
                    'email': data.email,
                    'password': data.password
                }
            

                
                let token = jwt.sign(payload,CODE)
                res.status(200).send([dataFromDBemplo,token]) 
                
            }

        }
        else{
            console.log("Account doesn't exists")
            res.json({"status" : "1"})
        }
    } catch (error) {
        console.log("login error > ",error)
        res.status(500)
    }
})
 







module.exports=router