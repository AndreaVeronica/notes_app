var mongoose = require('mongoose');

var NotesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String,  },

}, { timestamps: true } );

module.exports = mongoose.model('Note', NotesSchema);

