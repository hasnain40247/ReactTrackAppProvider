require("./models/User")
require("./models/Track")
const express= require('express');
const mongoose=require('mongoose')
const authRoutes=require("./routes/authroutes")
const requireAuth=require("./middlewares/requireAuth")
const bodyParser=require('body-parser')
const trackRoutes=require("./routes/trackRouts")
const app=express();
app.use(bodyParser.json())
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri='mongodb+srv://admin:<password>@cluster0.xv5zr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
})
app.get("/",requireAuth,(req,res)=>{
    res.send("hi there")
})

app.listen(3000,()=>{
    console.log("listening on port 3000");
})