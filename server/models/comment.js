var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new mongoose.Schema({
 // since this a reference to a different document, the _ is the naming convention!
	 _message: {type: Schema.ObjectId, ref: 'Message'},
	 name: String,
	 content: String, 
	 created_at: {type: Date, default: new Date}
});

mongoose.model('Comment', commentSchema);