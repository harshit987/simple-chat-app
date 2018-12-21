var mongoose = require('mongoose');

var schema = mongoose.Schema;

var user =  new schema({
    username : String,
    hash_pass : String
});

module.exports = mongoose.model('users',user);
