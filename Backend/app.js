const express = require('express');
const app = new express;
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
var dotenv = require('dotenv');


const booksRouter = require('./src/routes/booksRoutes');
const authorRouter = require('./src/routes/authorRoutes');
const userRouter = require('./src/routes/userRoutes');

const port = process.env.PORT || 3000;
dotenv.config();
var url = process.env.mongodb_uri;

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then((res)=>{
    console.log('Mongoose Connected');
});

app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/',userRouter);

app.use(express.static(path.join(__dirname,'public')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.listen(port,()=>{
    console.log("Backend Server ready at port:"+port);
})