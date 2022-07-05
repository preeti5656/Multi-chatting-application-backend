const mongoose = require('mongoose');

const url="mongodb+srv://preetibisht:preeti5656bishtalone@cluster0.c541p9i.mongodb.net/?retryWrites=true&w=majority"
//asynchronous
//it will return a promise
mongoose.connect(url)
.then(()=>{
    console.log("database connected");
})//when it successfull
.catch((err)=>{
    console.error(err);
});//when it fails
//promise important topic in java script
module.exports=mongoose;

