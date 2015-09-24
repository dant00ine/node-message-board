var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create our friendSchema
var MessageSchema = new mongoose.Schema({
	name: String,
	content: String,
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	created_at: {type: Date, default: new Date}
});

mongoose.model('Message', MessageSchema);