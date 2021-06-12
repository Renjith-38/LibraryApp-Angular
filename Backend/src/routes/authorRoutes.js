const express = require('express');
const authorRouter = express.Router();
const authorData = require('../models/authorsdata');
const verifyToken = require('./verify');

authorRouter.get('/getauthors',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    authorData.find()
        .then(function(authors){
            res.send(authors);
        })
});

//sending a single author
authorRouter.get('/:id',async(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    await authorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    })
});

//inserting a new author
authorRouter.post('/insert',verifyToken,async(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    // console.log(req.body);
    var author = {
        authorName:req.body.author.authorName,
        yearOfBirth:req.body.author.yearOfBirth,
        image:req.body.author.image,
        description:req.body.author.description
    }
    var author = new authorData(author);
    await author.save();
    res.send('Author Added');
});

//update a book
authorRouter.put('/update',verifyToken,async(req,res)=>{
    console.log(req.body)
    id=req.body._id;
    authorName=req.body.authorName;
    description=req.body.description,
    image=req.body.image;
    yearOfBirth=req.body.yearOfBirth;
   await authorData.findByIdAndUpdate({"_id":id},
                                {$set:{"authorName":authorName,
                                "description":description,
                                "image":image,
                                "yearOfBirth":yearOfBirth,
                                }})
   .then(function(){
       res.send();
   })
 })

 //delete an author
 authorRouter.delete('/delete/:id',verifyToken,async (req,res)=>{
    id = req.params.id;
    // console.log(id);
    await authorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('Book Deleted');
        res.send();
    })
})

module.exports = authorRouter;