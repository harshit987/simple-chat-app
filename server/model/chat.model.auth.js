var mongoose = require('mongoose');

var schema = mongoose.Schema;

var user =  new schema({
    username : String,
    hash_pass : String
});

var users = mongoose.model('users',user);