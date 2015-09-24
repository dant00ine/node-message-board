messageApp.controller('CommentsController', function($scope, CommentFactory){


var that = this;

this.addComment = function(){
	console.log('addComment')
		CommentFactory.addComment(that.new_comment, function(message){
			CommentFactory.getMessages(function(response){
				that.messages = response;
			})
		})
	}

})