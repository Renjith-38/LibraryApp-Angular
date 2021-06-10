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

//sending a single author
authorRouter.get('/:id',(req,res)=>{
    const id = req.params.id;
    // console.log(id);
    authorData.findOne({"_id":id})
    .then((author)=>{
        res.send(author);
    })
});

//inserting a new author
authorRouter.post('/insert',(req,res)=>{
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
    author.save();
    res.send('Author Added');
});

//update a book
authorRouter.put('/update',(req,res)=>{
    console.log(req.body)
    id=req.body._id;
    authorName=req.body.authorName;
    description=req.body.description,
    image=req.body.image;
    yearOfBirth=req.body.yearOfBirth;
   authorData.findByIdAndUpdate({"_id":id},
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
 authorRouter.delete('/delete/:id',(req,res)=>{
    id = req.params.id;
    // console.log(id);
    authorData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('Book Deleted');
        res.send();
    })
})

module.exports = authorRouter;