const router =require('express').Router();

const Hotel = require('../models/Hotel')



router.post("/add", async (req, res) =>{
    const { type,namehotel } = req.body;
    try {
        const newHotel = new Hotel({type,namehotel});
        const hotels = await newHotel.save();
        res.json({msg :"hotel added", hotels})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const hotels = await Hotel.find().populate('type','-_id');
        res.json({msg:'data Hotels', hotels})
    } catch (error) {
        console.log(error);

    }
});














module.exports = router;