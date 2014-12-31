var express = require('express');
var router = express.Router();

/* GET gallery */
router.get('/', function(req, res) {
	res.render('gallery', { urls : [
		'http://www.danji8.com/uploadpic/201301/09/2013010917335715141357724037.jpg',
		'http://www.91feizhuliu.com/uploads/allimg/130801/1_130801142002_1.jpg',
		'http://www.91feizhuliu.com/uploads/allimg/130801/1_130801142002_3.jpg',
		'http://i5.howbbs.net/bbspic/storeShow/05/29/052939c997ab7a1823ef452d9d37fd39.jpg']} );
});

module.exports = router;