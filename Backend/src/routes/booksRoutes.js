const express = require('express');
const booksRouter = express.Router();
const bookData = require('../models/booksdata');
const verifyToken = require('./verify');


booksRouter.get('/getbooks',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    bookData.find()
        .then(function(books){
            res.send(books);
        })
});


booksRouter.post('/insert',verifyToken,async(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    // console.log(req.body);
    var book = {
        bookTitle : req.body.book.bookTitle,
        authorName : req.body.book.authorName,
        yearOfPublication : req.body.book.yearOfPublication,
        genre : req.body.book.genre,
        image : req.body.book.image,
        description : req.body.book.description
    }

    var book  = new bookData(book);
    await book.save();
    res.send('Book Added');
})

//sending a single book
booksRouter.get('/:id',async (req,res)=>{
    const id = req.params.id;
    await bookData.findOne({"_id":id})
    .then((book)=>{
        res.send(book);
    })
});

//updating a book
booksRouter.put('/update',verifyToken,async(req,res)=>{
    console.log(req.body._id)
    id=req.body._id;
    bookTitle=req.body.bookTitle;
    authorName=req.body.authorName;
    description=req.body.description,
    image=req.body.image;
    genre=req.body.genre;
    yearOfPublication=req.body.yearOfPublication;
   await bookData.findByIdAndUpdate({"_id":id},
                                {$set:{"bookTitle":bookTitle,
                                "authorName":authorName,
                                "description":description,
                                "image":image,
                                "genre":genre,
                                "yearOfPublication":yearOfPublication,
                                }})
   .then(function(){
       res.send();
   })
 })

 //delete a book
 booksRouter.delete('/delete/:id',verifyToken,async(req,res)=>{
     id = req.params.id;
    await bookData.findByIdAndDelete({"_id":id})
     .then(()=>{
         console.log('Book Deleted');
         res.send();
     })
 })

module.exports = booksRouter;