const express = require('express');
const authorRouter = express.Router();
const authorData = require('../models/authorsdata');

authorRouter.get('/getauthors',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    authorData.find()
        .then(function(authors){
            res.send(authors);
        })
});
authorRouter.post('/insert',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    console.log(req.body);
    var author = {
        authorName:req.body.author.authorName,
        yearOfBirth:req.body.author.yearOfBirth,
        image:req.body.author.image,
        description:req.body.author.description
    }
    var author = new authorData(author);
    author.save();
    res.send('Author Added');
});

module.exports = authorRouter;