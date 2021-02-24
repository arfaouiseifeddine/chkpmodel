const router =require('express').Router();

const Room = require('../models/Room')



router.post("/add", async (req, res) =>{
    const { hotel,category,floor } = req.body;
    try {
        const newRoom = new Room({hotel,category,floor});
        const room = await newRoom.save();
        res.json({msg :"room added", room})
    } catch (error) {
        console.log(error)
    }
})

router.get("/", async (req,res) => {
    try {
        const room = await Room.find().populate('hotel','namehotel type -_id ')
        .populate('category',' -_id');
        res.json({msg:'data rooms', room})
    } catch (error) {
        console.log(error);

    }
});














module.exports = router;