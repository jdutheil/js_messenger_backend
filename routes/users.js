var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.route('/login')

	.post(function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		User.findOne({ username: username })
			.exec(function(err, user) {
				if (err) {
					res.send(err);
				}

				if (user.password != password) {
					res.send({ data: null });
				}

				res.send({ data: user });
			});
	});

module.exports = router;