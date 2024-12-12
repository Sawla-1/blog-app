const router = require("express").Router(); // prepare to use express framework to create router
const User = require("../models/User");     // prepare to use UserSchema
const Post = require("../models/Post");     // prepare to use UserSchema

//CREATE a new POST
router.post("/", async (req,res) => {   // create POST router ("/:id")
    const newPost = new Post(req.body);   // request user type in and save to "newPost" variable
    try{
        const savedPost = await newPost.save(); // save user type in to MongoDB and save to "savedPost" variable
        res.status(200).json(savedPost);        // respond "savedPost" variable if successful
    }catch(err){
        res.status(500).json(err);      // if can't find route, respond error
    }
});

// UPDATE New POST
router.put("/:id", async (req,res) => {   // update new post router ("/:id")
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id,
                    {
                        $set: req.body, 
                    },
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can update only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE New POST
router.delete("/:id", async (req,res) => {   // update new post router ("/:id")
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                // console.log(post);
                // console.log(typeof post.deleteOne);
                
                await post.deleteOne();
                res.status(200).json("Post has been deleted...");
            } catch (err) {
                res.status(500).json(err);
            }
        }else{
            res.status(401).json("You can delete only your post!");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a Specific single Post by id
router.get("/:id", async (req,res) => {   // create get post router ("/:id")
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err){
        res.status(500).json(err);          // send error respond
    }
});

// GET All Posts
router.get("/", async (req,res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username){
            posts = await Post.find({ username });
        }else if(catName){
            posts = await Post.find({ 
                categories:{
                    $in: [catName],
                },
            });
        }else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router // export router