const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth"); // prepare to indicate router
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");           // this is a library that we can upload our files

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

// To upload images or files using multer library
// Create storage and indicate this images folder
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, "images");
    },
    filename: (req,file,cb) =>{
        // cb(null,req.body.name);
        cb(null,"hello.jpg");
    },
});
// Upload image or file
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req,res) =>{
    res.status(200).json("File has been uploaded")
});

app.use("/api/auth", authRoute);            // indicating route
app.use("/api/users", userRoute);           // indicating route
app.use("/api/posts", postRoute);           // indicating route
app.use("/api/categories", categoryRoute);  // indicating route

app.listen("5000", ()=>{
    console.log("Backend is running.");
});
