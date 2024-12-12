const router = require("express").Router(); // prepare to use express framework to create router
const Category = require("../models/Category");     // prepare to use CategorySchema

// Post new Category
router.post("/", async (req,res) =>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET All Category
router.get("/", async (req,res) =>{
    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router // export router