const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const Post = require("../models/Post");     // prepare to use UserSchema
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
router.delete("/:id", async (req,res) => {   // create register router ("/:id")
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({username: user.username});
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...")
            } catch (err) {
                res.status(500).json(err);
            }
        } catch(err){
            res.status(404).json("User not found!");          // send error respond
        }
    }  else{
        res.status(401).json("You can delete only your account!");
    }
});

// GET
router.get("/:id", async (req,res) => {   // create register router ("/:id")
    try{
        
    } catch(err){
        res.status(404).json("User not found!");          // send error respond
    }
});

module.exports = router // export router
