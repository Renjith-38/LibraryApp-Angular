const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var AuthorSchema = new Schema({
    authorName: String,
    yearOfBirth: Number,
    image: String,
    description: String
});

module.exports = mongoose.model('authors',AuthorSchema);