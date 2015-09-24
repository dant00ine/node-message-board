var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');

module.exports = (function(){
	return {
		show: function(req, res){
			Message.findOne({_id: req.params.id})
				.populate('comments')
			.exec(function(err, message){
				if(err){
					console.log(err);
				} else {
					res.json(message);
				}
			})

		},

		add: function(req, res){

			var comment = new Comment(req.body);

			comment._message = message._id;
			message.comments.push(comment);
			//now save both to the db
			comment.save(function(err){
				message.save(function(err){
					if(err){
						console.log('bad comment entry')
						// res.redirect('/')
					} else {
						res.redirect('/')
					}
				})
			})
		}
	}
})();