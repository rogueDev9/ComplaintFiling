var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
	res.render('login');
});

router.post('/login', function (req, res, next) {
	res.send(req.body);
	
});

module.exports = router;
