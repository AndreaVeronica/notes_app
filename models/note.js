var mongoose = require('mongoose');

var NotesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String,  },
  user: {type: mongoose.Schema.ObjectId, ref: 'User'},

}, { timestamps: true } );

module.exports = mongoose.model('Note', NotesSchema);

