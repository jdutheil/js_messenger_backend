var express = require('express'),
	router = express.Router();

router.get('/', function(req, res) {
	res.json({ data: 'Bienvenue dans Messenger v2' });
});

var usersRoutes = require('./routes/users');
router.use('/', usersRoutes);

var messagesRoutes = require('./routes/messagesV2');
router.use('/messages', messagesRoutes);

module.exports = router;