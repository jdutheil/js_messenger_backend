var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.json({
		data: 'Bienvenue sur le Messenger.'
	});
});

var messagesRoutes = require('./routes/messages');
router.use('/messages/', messagesRoutes);

module.exports = router;