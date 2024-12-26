var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/page-login', function(req, res, next) {
  res.render('page-login', { title: 'Express' });
});


router.get('/page-register', function(req, res, next) {
  res.render('page-register', { title: 'Express' });
});


router.get('/page-logout', function(req, res, next) {
  res.render('page-logout', { title: 'Express' });
});



router.get('/page-lock-screen', function(req, res, next) {
  res.render('page-lock-screen', { title: 'Express' });
});





module.exports = router;
