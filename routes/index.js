var express = require('express');
var router = express.Router();
var passport = require('passport');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/currentUser', function(req, res, next){
   res.json(currentUser);

});

// Signup Page
router.route('/signup')
  .post(passport.authenticate('local-signup'), function(req, res) {
    //if (err) { return res.json({result: 'Error'}); }
    console.log(req);
    if (!req.user) {
      return res.json({result: info});
    }else {
      return res.json({result: 'Success', user: req.user});
    }
  });




// Login Page
router.route('/login')
  .post(passport.authenticate('local-login'), function(req, res) {
    console.log('passed authenticate');
    console.log(res);
    console.log('!!!');
    console.log(req.user);
      res.json(req.user);

  });

//Logout

router.get('/logout', function(req, res, next){
  req.logout();
  res.redirect('/');
});




module.exports = router;
