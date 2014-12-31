var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

router.get('/:id', function(req, res) {
	console.log(req.params.id);	
	Todo.findById(req.params.id, function (err, todo){
	    todo.remove( function (err, todo) {
	      res.redirect('/gallery');
	    });
	});
});

module.exports = router;