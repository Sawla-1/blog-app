const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const bcrypt = require("bcrypt");           // Prepare to use bcrypt to hash password

//REGISTER
router.post("/register", async (req,res) => {   // create register router ("/register")
    try{
        const salt = await bcrypt.genSalt(10);                          //hash password 10 times
        const hashedPass = await bcrypt.hash(req.body.password, salt);  // request user type in password and hash
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
router.post("/login", async (req,res) => {  // create login router ("/login")
    try {
        const user = await User.findOne({ username: req.body.username });   // use.findOne() method to find user in mongoDB
        !user && res.status(400).json("Wrong credentials!");                // if user not found, respond "wrong credentials!"

        const validated = await bcrypt.compare(req.body.password, user.password); // use .compare() to compare compare passwords
        !validated && res.status(400).json("Wrong credentials!");   // if passwords are not match, respond "wrong credentials!"

        const { password, ...others} = user._doc;                   // store user info in variables using destructuring and spread operator
        res.status(200).json(others);                               // when process successful, respond user info without password
    } catch (err) {
        res.status(500).json(err);                                  // if can't go to route, respond error
    }
})

module.exports = router // export router
