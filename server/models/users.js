// The User model

var mongoose = require('mongoose')
   ,Schema   = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number,
    jsFan: Boolean
});

module.exports = mongoose.model('User', userSchema);