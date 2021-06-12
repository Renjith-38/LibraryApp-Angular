const express = require('express');
const userRouter = express.Router();
const userData = require('../models/userdata');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function verifyToken(req,res,next)
{

}

//user sign up api
userRouter.post('/signup',async(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    // console.log('Backend Reached');
    var user = new userData();
    user.name = req.body.user.name;
    user.email = req.body.user.email;
    user.password = await bcrypt.hash(req.body.user.password,12);
    user.mobile = req.body.user.mobile;
    console.log(user);
    user.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            if(err.code == 11000)
                res.status(422).send('Email address already Exists');
            else
                console.log(err);
        }
    })
})

//user login api
userRouter.post('/login',async(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    const email = req.body.user.email;
    const password = req.body.user.password;
    // console.log(email+'+'+password);
    const user = await userData.findOne({email});
    if(!user){
        
        res.status(401).send('Invalid credentials!');
    }
    else{
        const passMatch = await bcrypt.compare(password,user.password);
        if(!passMatch){
        
            res.status(401).send('Invalid credentials!');
        }
        else{
            let payload = {subject:email+password}
            let token = jwt.sign(payload,'hash');
            res.status(200).send({token});
        }
            
    }
    
})


module.exports = userRouter;