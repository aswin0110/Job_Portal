const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = new express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

PORT = 3000

//  mongoose 
require('./middlewares/mongoDB')

const signupData = require('./model/signupModel')


// api
const api = require('./routes/api')
app.use('/api', api)

app.post('/add', async (req,res) =>{
    var data = new signupData(req.body)

    let name = data.name
    let mail = data.email
    let pass = data.password

    // check the email is alredy in there
    const list = await signupData.find({email:mail})
    console.log(list);

    if(list =="" && mail !='' && pass !=''){
        const newUser = new signupData(data)
        
    }
    res.send(data.name)
})











app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})