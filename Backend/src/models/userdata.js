const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://userrenjith:userrenjith@projectfiles.dmtoz.mongodb.net/Library?retryWrites=true&w=majority',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
//     useCreateIndex:true,
// })
// .then((res)=>{
//     console.log('Mongoose Connected');
// });

const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:String,
    mobile:Number
    
});

module.exports = mongoose.model('users',UserSchema);