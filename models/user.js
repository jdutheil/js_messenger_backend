var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var userSchema = new Schema({
	username: { type: String, index: true, unique: true, required: true },
	password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);