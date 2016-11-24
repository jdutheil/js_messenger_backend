var express = require('express'),
	router = express.Router();

var Message = require('../models/message');

router.route('/')

	.get(function(req, res) {
		console.log('get !');

		Message.find(function(err, messages) {
			if (err) {
				res.send(err);
			}

			res.send({ data: messages });
		});
	})

	.post(function(req, res) {
		console.log('post !');

		var message = new Message(req.body);
		// Save date
		message.createdAt = new Date();

		message.save(function(err) {
			if (err) {
				res.send(err);
			}

			res.json({ data: message });
		});
	});

module.exports = router;