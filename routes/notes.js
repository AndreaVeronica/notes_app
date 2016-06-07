var express = require('express');
var router = express.Router();

var notes = [
  { title: 'First Note', text: "This is the text for the first note" },
  { title: 'Second Note', text: "This is the text for the second note" },
  { title: 'Third Note', text: "This is the text for the third note" }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(notes);
});

module.exports = router;
