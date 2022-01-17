const express=require('express');
const mongoose=require('mongoose');
const User= mongoose.model('User');
const jwt=require('jsonwebtoken')
const router=express.Router();
const requireAuth=require("../middlewares/requireAuth")
const Track=mongoose.model('Track')

router.use(requireAuth)

router.get('/tracks',async (req,res)=>{
const tracks=await Track.find({userId: req.user._id})
res.send(tracks)
});


router.post('/tracks',async (req,res)=>{
    console.log("Inside");
const {name,locations}=req.body;
if(!name || !locations){
    return res.status(422).send({error:"Errors"})

}
try{
    const track=new Track({name,locations,userId:req.user._id})
await track.save();
res.send(track)

}catch(err){
    return res.status(422).send({error:"Errors"})

}
    });


module.exports=router;