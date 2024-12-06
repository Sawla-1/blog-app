const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); // prepare to indicate router

dotenv.config();
app.use(express.json());                    // to able to get respon with json type data

mongoose
    .connect(process.env.MONGO_URL, {
        // useNewUrlParser:true, // no longer valid in newer version
        // useUnifiedTopology:true, // no longer valid in newer version
        // useCreateIndex:true, // Remove this line which no longer valid in newer version.
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err)=> console.log(err));

app.use("/api/auth", authRoute);            // indicating route

app.listen("5000", ()=>{
    console.log("Backend is running.");
});
