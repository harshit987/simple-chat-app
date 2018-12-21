var users = require('../model/chat.model.auth.js'); 
exports.register = function(req,res){
    var user = new users({
        username : req.body.user,
        hash_pass : req.body.password
    });

   user.save(function(err,res){
       if(err)
       return handleError(err);
       else
       console.log(res);
   });
};
exports.login = function(req,res){       

    users.findOne({username : req.body.user,hash_pass : req.body.password},function(err,result){
        if(err)
        return handleError(err);
        else
        {
            return res.redirect('/home');
        }
    });
};
exports.signup = function(req,res){
    res.render('signup.ejs');
};
exports.signin = function(req,res){
    res.render('signin.ejs');
};