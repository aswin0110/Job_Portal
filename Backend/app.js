const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const passport = require("passport");

const alumniProfileRoute = require('./routes/aluminiProfileDetails');
const JobCareerRoute = require('./routes/jobform')


const app = new express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

const PORT = 3000

//  mongoose 
require('./middlewares/mongoDB')
require("./middlewares/passport")(passport);
require("./middlewares/jwtVerify");
// const signupData = require('./model/signupModel')


// api
const api = require('./routes/api')
app.use('/api', api)


app.use('/alumni', alumniProfileRoute);

app.use('/career', JobCareerRoute );


const alumni = require('./model/signupModel')
const employer = require('./model/employeeModel')
app.post('/api/loginn',async (req,res)=>{

    let data = req.body
    console.log(data);

    let datafromDB = await alumni.find({email:data.email})
    let datafromempl = await employer.find({email:data.email})
    let datarolealu = await alumni.find({role:data.role})
    let dataroleempl = await employer.find({role:data.role})

    if(datafromDB!= '' || datafromempl !='' ){
        console.log('data available');

        let dataalupass = await alumni.find({password:data.password})
        let dataemolpass = await employer.find({password:data.password})
        if( dataalupass!='' || dataemolpass!= '' && datarolealu !='' || dataroleempl !=''){
            console.log('password available');
            
            if(data.role =='alumni'){
            res.json({status:'alumni page'})

            }
            else if(data.role =='employer'){
            res.json({status:'employer page'})

            }
            else{
            res.json({status:'role error '})

            }

        //     if(){
        //         console.log('redirect page to alumni');
        // res.json({status:'1'})

        //     }
        //     else if( ){
        //         console.log('redirect page to employer');
        //         res.json({status:'3'})
        //     }
        //     else{
        //         res.json({status:"role error"})
        //     }
            
        }
        else{
            console.log('pass not');
        }
        // console.log(dats.email);

        // console.log(datafromDB.email, datafromempl.email);

    }
    else{
        res.json({status:'2'})

        console.log('data not available');
    }


})










app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})