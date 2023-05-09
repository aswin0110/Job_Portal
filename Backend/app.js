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


// app.use('/alumni', alumniProfileRoute);

app.use('/career', JobCareerRoute );




const path = require('path')

app.use(express.static('./dist/frontend'))

app.get('/*', function(req, res) {

  res.sendFile(path.join(__dirname + '/dist/frontend/index.html'))
   }); 



 

app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})