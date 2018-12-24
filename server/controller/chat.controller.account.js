exports.home = function (req, res) {
    
    res.render('home.ejs')
}
exports.superchat = function (req, res) {
    var username = req.session.username
   
    res.render('superchat.ejs',{user : username})
 
}
