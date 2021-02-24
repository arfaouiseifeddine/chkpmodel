const mongoose = require("mongoose")


const Schema= mongoose.Schema

const employeSchema = new Schema({
  

    hotel: {type: mongoose.Schema.Types.ObjectId,
        
        ref:'Hotel',
        
 },

 
    

 Emp_name: {
    type: String,
    required:true,
},

Emp_speciallity: {
    type: String,
    required:true,
},

    
})

module.exports = Employe = mongoose.model('Employe', employeSchema);