const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LibraryAngular',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
})
.then((res)=>{
    console.log('Mongoose Connected');
});

const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    authorName: String,
    yearOfBirth: Number,
    image: String,
    description: String
});

module.exports = mongoose.model('authors',AuthorSchema);