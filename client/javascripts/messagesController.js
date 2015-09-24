messageApp.controller('MessagesController', function($scope, MessageFactory){
	
	var that = this;

	var getAllMessages = MessageFactory.getMessages(function(data){
		that.messages = data;
	});


	this.addMessage = function(){
		
		MessageFactory.addMessage(that.new_message, function(){
			MessageFactory.getMessages(function(response){
				that.messages = response;
			})
		});
	}
	that.addComment = function(message_id){
		MessageFactory.addComment(that.new_comment, message_id, function(){
			
			// getAllMessages; 
			MessageFactory.getMessages(function(data){
			
				that.messages = data;})
		})
	}
})