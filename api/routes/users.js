const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const bcrypt = require("bcrypt");           // Prepare to use bcrypt to hash password

//UPDATE
router.put("/:id", async (req,res) => {   // create register router ("/:id")
    if(req.body.userId === req.params.id){
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
    
        try{
            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                $set: req.body,
                }, 
                {new: true}
            );
            res.status(200).json(updatedUser);
        } catch(err){
            res.status(500).json(err);          // send error respond
        }
    }  else{
        res.status(401).json("You can update only your account!");
    }
});

// DELETE

module.exports = router // export router
