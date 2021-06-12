const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userrenjith:userrenjith@projectfiles.dmtoz.mongodb.net/Library?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then((res)=>{
    console.log('Mongoose Connected');
});

const Schema = mongoose.Schema;

var BookSchema = new Schema({
    bookTitle: String,
    authorName: String,
    yearOfPublication: Number,
    genre: String,
    image: String,
    description:String,
});

module.exports = mongoose.model('books',BookSchema);