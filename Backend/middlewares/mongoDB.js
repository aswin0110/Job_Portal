const mongoose = require ('mongoose')
mongoose.connect('mongodb+srv://aswinkannur1:Aswinkannur01@cluster0.amfjccq.mongodb.net/LibraryApp?retryWrites=true&w=majority')

.then(()=>{
    console.log('-------mongodb connected successfully-------')
})
.catch((error)=>{
    console.log(error.message)
}) 