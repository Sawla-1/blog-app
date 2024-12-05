const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser:true, // no longer valid in newer version
    // useUnifiedTopology:true, // no longer valid in newer version
    // useCreateIndex:true, // Remove this line which no longer valid in newer version.
}).then(console.log("Connected to MongoDB")).catch((err)=> console.log(err));

app.listen("5000", ()=>{
    console.log("Backend is running.");
});