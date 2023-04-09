const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = new express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))

PORT = 3000








app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})