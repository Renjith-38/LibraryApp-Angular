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

module.exports = authorRouter;