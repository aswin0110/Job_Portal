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






// countdown date
function parseDate(input) {
    const parts = input.split('/');
    // Note: parts[0] is the day, parts[1] is the month (0-indexed), parts[2] is the year.
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  
  app.post('/countdown', (req, res) => {
    const inputCurrentDate = req.body.currentDate;
    const inputTargetDate = req.body.date;
    console.log("Input current date:", inputCurrentDate);
    console.log("Input target date:", inputTargetDate);
  
    const currentDate = parseDate(inputCurrentDate);
    const targetDate = parseDate(inputTargetDate);
    console.log("Parsed current date:", currentDate);
    console.log("Parsed target date:", targetDate);
  
    // Calculate the time difference in milliseconds
    const timeDiff = targetDate.getTime() - currentDate.getTime();
  
    // Convert milliseconds to days
    const countdown = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    console.log("Countdown:", countdown);
  
    res.json({ countdown });
  });

  

// Find all users date  and return them as JSON
const User = require('./model/jobformModel');

app.get('/users', async (req, res) => {
  try {
    const users = await User.find({});
    const formattedUsers = users.map(user => ({
      name: user.name,
      email: user.email,
      date: user.date
    }));
    res.json(formattedUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

  



app.post('/countdowns', (req, res) => {
  const startDate = new Date(req.body.startDate);
  const endDate = new Date(req.body.endDate);
  const now = new Date();
  console.log( now);
  console.log( startDate);
  console.log( endDate);

  if (startDate > endDate) {
    return res.status(400).json({ error: 'End date should be after start date' });
  }

  const diff = endDate.getTime() - startDate.getTime();
  const remaining = endDate.getTime() - now.getTime();

  if (remaining < 0) {
    return res.json({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  }

  const days = Math.max(Math.floor(remaining / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
  const minutes = Math.max(Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)), 0);
  const seconds = Math.max(Math.floor((remaining % (1000 * 60)) / 1000), 0);

  res.json({ days, hours, minutes, seconds });
  
});





 

app.listen(PORT, ()=>{
    console.log(`..........Server is running in ${PORT}..........`);
})