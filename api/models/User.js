const mongoose = require("mongoose");   // import/prepare to use mongoose

const UserSchema = new mongoose.Schema( // use Schema method in mongoose to create UserSchema Schema, it is like create table in Postgres SQL database
    {
        username:{                      // Create object
            type:String,                // this is like you create a table with Postgres SQL database
            required:true,              // you have to do/include
            unique:true,                // so, nobody can create a user with same username
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        profilePic:{
            type:String,
            default:"",                 // don't use required:true because when you create a user you don't have to upload any image first so use default: "" which empty string
        },
    },
    {timestamps:true}   //shortcut to create a date or updated date
);

module.exports = mongoose.model("User", UserSchema);    // to export this schema