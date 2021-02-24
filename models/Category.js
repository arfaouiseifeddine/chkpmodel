const mongoose = require("mongoose")


const Schema= mongoose.Schema

const categorySchema = new Schema({
  
    

    
     name: {
    type: String,
    required:true,
                },
    
    price: {
    type: String,
    required:true,
                },

    beds_numbre: {
    type: String,
    required:true,
                },

    
                
    
})

module.exports = Category = mongoose.model('Category', categorySchema);