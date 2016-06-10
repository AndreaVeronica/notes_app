var express = require('express');
var router = express.Router();
var Note = require('../models/note');




function seedNotes() {
  var seedNotes = [
    { title: 'First Note',
    text: "This is the text for the first note" },
  { title: 'Second Note',
    text: "This is the text for the second note" },
  { title: 'Third Note',
    text: "This is the text for the third note" }
  ];

  Note.find({}).remove()
  .then(function() {
    return Note.create(seedNotes);
  })
  .then(function() {
    return Note.find({});
  })
  .then(function(found) {
    console.log('We saved and retrieved', found.length, 'notes.');
  });
}

seedNotes();

/* GET home page. */
router.get('/', function(req, res, next) {
  Note.find({})
  .then(function(notes) {
    console.log(global.currentUser);
    res.json(notes);

  });

});

/* Post New Note */
router.post('/new', function(req, res, next) {
  var newNote = {
    text: req.body.text,
    title: req.body.title
  }

  Note.create(newNote)
  .then(function(note) {
    console.log(global.currentUser, note);
    res.json(note);
  });
});


/* Delete Post */
router.delete('/:id', function(req, res, next) {
 Note.findByIdAndRemove(req.params.id)
 .then(function() {
   res.json({message: 'Note successfully deleted'});
 }, function(err) {
   return next(err);
 });
});

module.exports = router;
