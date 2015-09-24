messageApp.controller('MessagesController', function($scope, MessageFactory){
	
	var that = this;

	MessageFactory.getMessages(function(data){
		that.messages = data;
	});

	this.addMessage = function(){
		
		MessageFactory.addMessage(that.new_message, function(message){
			MessageFactory.getMessages(function(response){
				that.messages = response;
			})
		});
	}

	this.addComment = function(message_id){

		MessageFactory.addComment(that.new_comment, message_id, function(message){

			MessageFactory.getMessages(function(response){
				that.messages = response;
			})
		})
		that.new_comment = {};
	}

})