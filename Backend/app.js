const express = require('express');
const app = new express;
const Authordata = require('./src/models/authorsdata');
const cors = require('cors');


const booksRouter = require('./src/routes/booksRoutes');
const authorRouter = require('./src/routes/authorRoutes');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/books',booksRouter);
app.use('/authors',authorRouter);

app.listen(3000,()=>{
    console.log("Backend Server ready at port:3000");
})