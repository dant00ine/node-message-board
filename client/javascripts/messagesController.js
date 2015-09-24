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

})