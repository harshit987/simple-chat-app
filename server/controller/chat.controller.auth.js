var users = require('../model/chat.model.auth.js'); 
exports.register = function(req,res){
    var user = new users({
        username : req.body.user,
        hash_pass : req.body.password
    });
   console.log(user);
};

exports.signup = function(req,res){
    res.render('signup.ejs');
};