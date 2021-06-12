const express = require('express');
const app = new express;
const cors = require('cors');
const mongoose = require('mongoose');


const booksRouter = require('./src/routes/booksRoutes');
const authorRouter = require('./src/routes/authorRoutes');
const userRouter = require('./src/routes/userRoutes');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb+srv://userrenjith:userrenjith@projectfiles.dmtoz.mongodb.net/Library?retryWrites=true&w=majority',{
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


// app.post('/signup',(req,res)=>{
//     console.log('backend reached');
//     var user = new userdata();
//     user.name = req.body.user.name;
//     user.email = req.body.user.email;
//     user.password = req.body.user.password;
//     user.mobile = req.body.user.mobile;
//     console.log(user);

// })

app.listen(3000,()=>{
    console.log("Backend Server ready at port:3000");
})