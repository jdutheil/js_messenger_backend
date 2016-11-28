var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.route('/register')

	.post(function(req, res) {
		var user = new User(req.body);

		user.save(function(err) {
			if (err) { 
				console.log('save error');
				return res.send(err); 
			}

			console.log('no error : ' + user._id);
			return res.json({ data: user });
		});
	});

router.route('/login')

	.post(function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

		User.findOne({ username: username })
			.exec(function(err, user) {
				if (err) {
					return res.send(err);
				}

				if (user == null || user.password != password) {
					return res.json({ data: null });
				} else {
					return res.json({ data: user });
				}
			});
	});

router.route('/users')

	.get(function(req, res) {
		User.find(function(err, users) {
			if (err) { return res.send(err); }

			res.json({ data: users });
		});
	});

module.exports = router;