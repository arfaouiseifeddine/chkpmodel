const mongoose = require('mongoose')

const config =require("config")


const cDB = async () => {
    try {
        await mongoose.connect(config.get("MONGOURI"), { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB is connect ');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = cDB;