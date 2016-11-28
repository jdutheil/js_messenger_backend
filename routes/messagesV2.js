var express = require('express'),
	router = express.Router();

var Message = require('../models/messageV2');
var User = require('../models/user');

router.route('/')
	
	.get(function(req, res) {
		Message.find()
			   .populate('_author')
			   .exec(function(err, messages) {
			       if (err) { res.send(err); }

			       console.log(JSON.stringify(messages));
			       
			       res.json({ data: messages });		
			   })
	})

	.post(function(req, res) {
		console.log('message V2 post');

		var userId = req.body.author;

		User.findOne({ _id: userId })
			.exec(function(err, user) {
				if (err) { res.send(err); }

				console.log('user found : ' + user.username);

				delete req.body.author;

				var message = new Message(req.body);
				message._author = userId;
				message.createdAt = new Date();	

				console.log('message');
				console.log(JSON.stringify(message));

				message.save(function(err) {
					if (err) { 
						console.log('err : ' + err);
						res.send(err); 
					}

					res.json({ data: message });
				});
			});
	})

module.exports = router;