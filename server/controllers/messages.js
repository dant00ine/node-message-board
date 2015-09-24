var mongoose = require('mongoose');
var Message = mongoose.model('Message');

module.exports = (function(){
	return {
		show: function(req, res){
			Message.find({}, function(err, results){
				console.log(results);
				if(err){
					console.log(err);
				} else {
					res.json(results);
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
		},

		update: function(req, res){
			
			var query = {"_id": req.params.id};
			
			var update = {$push: {comments: {name: req.body.name, content: req.body.content}}};
			
			var options = {new: true};
			Message.findOneAndUpdate(query, update, options, function(err, results){
				if(err){
					console.log('error:', err)
				}
				res.json(results);
			})
		}
	}
})();