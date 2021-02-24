const mongoose = require("mongoose")


const Schema= mongoose.Schema

const roomSchema = new Schema({
  

    hotel: {type: mongoose.Schema.Types.ObjectId,
        
        ref:'Hotel',
        
 },

 
 category: {type: mongoose.Schema.Types.ObjectId,
        
    ref:'Category',
    
},
 floor: {
    type: String,
    required:true,
},

    
})

module.exports = Room = mongoose.model('Room', roomSchema);