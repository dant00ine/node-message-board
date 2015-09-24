var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Message = mongoose.model('Message');

module.exports = (function(){
	return {

		add: function(req, res){

			var comment = new Comment(req.body);
			comment.save(function(err, results){
				if(err){
					console.log("error:", err)
				}
				console.log(results._id);
				var query = {_id: req.params.id};
				var update = {$push: {comments: results._id}};
				Message.findOneAndUpdate(query, update, function(err, results){
					if(err){
						console.log("error:", err);
					}
					console.log("success:", results);
					res.json("added");
				})
			})
			console.log("comment body:",req.body);
			console.log("msg id",req.params.id);
		}
	}
})();