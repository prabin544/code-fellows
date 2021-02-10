const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:String,
    googleId:String,
    picture:String,
    email:String
})

mongoose.model("users",userSchema);
