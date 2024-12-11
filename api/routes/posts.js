const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const Post = require("../models/Post");     // prepare to use UserSchema

//UPDATE POST
router.post("/", async (req,res) => {   // create register router ("/:id")
    const newPost = new Post(req.body);   // request user type in and save to "newPost" variable
    try{
        const savedPost = await newPost.save(); // save user type in to MongoDB and save to "savedPost" variable
        res.status(200).json(savedPost);        // respond "savedPost" variable if successful
    }catch(err){
        res.status(500).json(err);      // if can't find route, respond error
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
router.get("/:id", async (req,res) => {   // create get router ("/:id")
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch(err){
        res.status(500).json(err);          // send error respond
    }
});

module.exports = router // export router
