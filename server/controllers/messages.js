var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = (function(){
	return {
		show: function(req, res){
			Message.find({})
				.populate('comments')
			.exec(function(err, messages){
				if(err){
					console.log(err);
				} else {
					res.json(messages);
				}
			})

		},

		add: function(req, res){
			console.log('server controller add function reached');
			console.log(req.body);
			console.log(req.body.name);

			var newmessage = new Message(req.body);
			newmessage.save(function(err){
				if(err){
					console.log("bad entry");
					res.redirect('/')
				} else {
					res.redirect('/')
				}
			})
		}
	}
})();