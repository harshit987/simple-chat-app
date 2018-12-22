exports.home = function (req, res) {
  res.render('home.ejs')
}
exports.superchat = function (req, res) {
    console.log(sess.username)
    res.render('superchat.ejs')
 
}
