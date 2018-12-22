var express = require('express');
var router = express.Router();

var account = require('../controller/chat.controller.account.js');

router.get('/home',account.home);
router.get('/superchat',account.superchat);
module.exports = router;