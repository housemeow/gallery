var express = require('express');
var router = express.Router();

/* GET upload page. */
router.get('/', function(req, res) {
  res.render('upload');
});

router.post('/', function(req, res) {
  console.log(req.body.url);
  res.json(req.body);
});

module.exports = router;
