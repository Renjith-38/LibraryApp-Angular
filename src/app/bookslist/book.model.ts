export class BookModel{
    constructor(
        public _id:String,
        public bookTitle:String,
        public authorName:String,
        public yearOfPublication:Number,
        public genre:String,
        public image:String
    )
    {}
}