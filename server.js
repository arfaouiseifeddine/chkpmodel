const express = require ("express")
const connect = require('./config/cDB')


const typeRouter = require('./route/type')
const hotelRouter = require('./route/hotet')
const categoryRouter =require('./route/category')
const roomRouter =require('./route/room')
const employRouter =require('./route/employe')
const app =express();

app.use(express.json());

connect();



app.use('/api/type', typeRouter)
app.use('/api/hotel' , hotelRouter)
app.use('/api/category' , categoryRouter)
app.use('/api/room' , roomRouter)
app.use('/api/employ' , employRouter)




// create port 
const port = process.env.PORT || 5000;
app.listen(port, (error) =>
error? console.log(error) : console.log(`server is running on port ${port}`));