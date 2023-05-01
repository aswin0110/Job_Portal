// const { Schema, model } = require("mongoose");

// const UserSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true
//     },
//     email: {
//       type: String,
//       required: true
//     },
//     role: {
//       type: String,
//       default: "user",
//       enum: ["user", "admin", "superadmin"]
//     },
//     username: {
//       type: String,
//       required: true
//     },
//     password: {
//       type: String,
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// module.exports = model("users", UserSchema);

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    email:{
        type : String,
        required : true
    },
    userName:{
        type : String,
        required : true
    },
    password:{ 
        type : String,
        required : true
    },
    dp:{
        type : String
    },
    mutedUsers:{
        type : Array
    },
    blockedUsers:{
        type : Array
    }
})

var userModel = mongoose.model('users', userSchema)
module.exports = userModel