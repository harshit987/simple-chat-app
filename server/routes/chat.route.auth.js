var express = require('express');
var router = express.Router();

/* router for login and signup page */
var auth = require('../controller/chat.controller.auth.js');
router.post('/register',auth.register);
router.get('/signup',auth.signup);

module.exports= router;