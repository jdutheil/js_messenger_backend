var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var messageSchema = new Schema({
	author: String,
	content: String,
	createdAt: Date
});

module.exports = mongoose.model('Message', messageSchema);