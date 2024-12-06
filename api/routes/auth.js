const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const bcrypt = require("bcrypt");           // Prepare to use bcrypt to hash password

//REGISTER
router.post("/register", async (req,res) => {
    try{
        const salt = await bcrypt.genSalt(10);                          //hash password 10 times
        const hashedPass = await bcrypt.hash(req.body.password, salt);  // request user type in password
        const newUser = new User({          //>> use UserSchema in moldels folder
            username: req.body.username,    //>> Specific what the user will type or submit.
            email: req.body.email,          //      It means it will only take username, email 
            password: hashedPass,           //      and password
        });

        const user = await newUser.save();  // To save this user. Use await since async process. This save method is coming from mongoose since we're using UserSchema
        res.status(200).json(user);         // Send successful respond

    } catch(err){
        res.status(500).json(err);          // send error respond
    }
})

//LOGIN

module.exports = router // export router
