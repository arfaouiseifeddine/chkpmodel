const router =require('express').Router();

const Employ = require('../models/Employ')



router.post("/add", async (req, res) =>{
    const { hotel,Emp_name,Emp_speciallity } = req.body;
    try {
        const newEmploy = new Employ({hotel,Emp_name,Emp_speciallity });
        const employ = await newEmploy.save();
        res.json({msg :"employ added", employ})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const employ = await Employ.find().populate('hotel','namehotel type -_id ')
        
        res.json({msg:'data employ', employ})
    } catch (error) {
        console.log(error);

    }
});














module.exports = router;