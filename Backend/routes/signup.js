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
// get all signup details : admin use only
router.get('/admin/signupdetails', async (req,res)=>{
    let data = await signupData.find()
    res.json(data)
})






  module.exports = router