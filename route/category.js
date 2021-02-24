const router =require('express').Router();

const Category = require('../models/Category')



router.post("/add", async (req, res) =>{
    const { name,price,beds_numbre } = req.body;
    try {
        const newCategory = new Category({name,price,beds_numbre });
        const category = await newCategory.save();
        res.json({msg :"category added", category})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const category = await Category.find()
        res.json({msg:'data categirys', category})
    } catch (error) {
        console.log(error);

    }
});














module.exports = router;