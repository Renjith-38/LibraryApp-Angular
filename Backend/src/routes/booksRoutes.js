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

module.exports = booksRouter;