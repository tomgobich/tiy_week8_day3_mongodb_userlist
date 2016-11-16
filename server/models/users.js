// The User model

var mongoose = require('mongoose')
   ,Schema   = mongoose.Schema;

var userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    jsFan: Boolean
});

module.exports = mongoose.model('User', userSchema);