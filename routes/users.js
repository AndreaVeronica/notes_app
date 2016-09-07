var express = require('express');
var router = express.Router();
var User = require('../models/user');

// Check if user is logged in
function authenticate(req, res, next) {
  req.isAuthenticated() ? next() : res.redirect('/');
}

// Check that user owns the page
function authorized(id) {
  return ""+currentUser._id === id;
}

function makeError(res, message, status) {
  res.statusCode = status;
  var error = new Error(message);
  error.status = status;
  return error;
}

//---------------------------------------//
//  Users Index - GET                    //
//---------------------------------------//
router.get('/', function(req, res, next) {
  res.render('user/index.ejs', { currentUser: currentUser });
});

//---------------------------------------//
//  User Show - GET & PUT                //
//---------------------------------------//
router.route('/:id')
  .get(function(req, res, next) {

  })
  .put(authenticate, function(req, res, next) {

  });

//---------------------------------------//
//  User Edit - GET                      //
//---------------------------------------//
router.route('/id/edit')
  .get(authenticate, function(req, res, next) {

  });


module.exports = router;
