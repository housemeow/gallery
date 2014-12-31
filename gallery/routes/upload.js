var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');


/* GET upload page. */
router.get('/', function(req, res) {
  res.render('upload');
});

router.post('/', function(req, res) {
  //console.log(req.body.url);
  //res.json(req.body);
  new Todo({
  	content		: req.body.url,
  	updated_at	: Date.now()
  }).save(function() {
  	res.redirect('/upload');
  });
});

module.exports = router;
