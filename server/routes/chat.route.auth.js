var express = require('express');
var router = express.Router();

/* router for login and signup page */
var auth = require('../controller/chat.controller.auth.js');
var account = require('../controller/chat.controller.account.js');
router.post('/register',auth.register);
router.get('/signup',auth.signup);
router.post('/login',auth.login);
router.get('/signin',auth.signin);
router.get('/home',account.home);
module.exports= router;