const mongoose = require('mongoose');

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