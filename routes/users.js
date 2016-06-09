var express = require('express');
var router = express.Router();
var notes = require('../models/notes');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
