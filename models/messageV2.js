var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var messageV2Schema = new Schema({
	_author: { type: Schema.Types.ObjectId, ref: 'User' },
	content: String,
	createdAt: Date
});

module.exports = mongoose.model('MessageV2', messageV2Schema);