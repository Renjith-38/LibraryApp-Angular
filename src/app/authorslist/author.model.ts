export class AuthorModel{
    constructor(
        public _id:String,
        public authorName:String,
        public yearOfBirth:Number,
        public description:String,
        public image:String
    )
    {}
}