const express = require('express');
const booksRouter = express.Router();
const bookData = require('../models/booksdata')


booksRouter.get('/getbooks',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');

    bookData.find()
        .then(function(books){
            res.send(books);
        })
});

booksRouter.post('/insert',(req,res)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    var book = {
        bookTitle : req.body.book.bookTitle,
        authorName : req.body.book.authorName,
        yearOfPublication : req.body.book.yearOfPublication,
        genre : req.body.book.genre,
        image : req.body.book.image,
        description : req.body.book.description
    }

    var book  = new bookData(book);
    book.save();
    res.send('Book Added');
})

module.exports = booksRouter;