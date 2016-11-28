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

		if (message.content && message.author) {
			// Save date
			message.createdAt = new Date();

			message.save(function(err) {
				if (err) {
					res.send(err);
				}

				res.json({ data: message });
			});
		} else {
			console.log('no content / message defined : ' + JSON.stringify(message));
		}
	});

module.exports = router;