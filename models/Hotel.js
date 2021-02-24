const mongoose = require("mongoose")


const Schema= mongoose.Schema

const hotelSchema = new Schema({

    type: {type: mongoose.Schema.Types.ObjectId,
        
        ref:'Type',
        
 },
    
    namehotel : {
        type: String,
        required:true,
    },
    

})

module.exports = Hotel = mongoose.model('Hotel', hotelSchema);