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



// Collection.create(newCol, function(err, collection) {
//         user.collections.push(collection);
//         user.save(function(err, saved) {
//           return res.json({collection: collection, user: saved});
//         });
//       });
//     }else {
//       console.log(user);
//       return res.json({result: 'Failed'});
//     }
//   });


module.exports = router;
