const router =require('express').Router();

const Type = require('../models/Type')



router.post("/add", async (req, res) =>{
    const { type } = req.body;
    try {
        const newType = new Type({type});
        const types = await newType.save();
        res.json({msg :"type added", types})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const types = await Type.find()
        res.json({msg:'data ATypes', types})
    } catch (error) {
        console.log(error);

    }
});














module.exports = router;