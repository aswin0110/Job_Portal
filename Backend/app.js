const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const passport = require("passport");

const alumniProfileRoute = require('./routes/aluminiProfileDetails');


const app = new express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

const PORT = 3000

//  mongoose 
require('./middlewares/mongoDB')
require("./middlewares/passport")(passport);

// const signupData = require('./model/signupModel')


// api
const api = require('./routes/api')
app.use('/api', api)


app.use('/alumni', alumniProfileRoute);










app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})