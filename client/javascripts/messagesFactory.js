messageApp.factory('MessageFactory', function($http){

	var factory = {};

	factory.getMessages = function(callback){
		// console.log("here");
		$http.get('/messages').success(function(output){
			// console.log('here');
			callback(output);

		})
	}

	factory.addMessage = function(info, callback){

		$http.post('/messages', info).success(function(response){
			// console.log(response);
			callback(response);
		})

	}

	factory.addComment = function(info, message_id, callback){
		
		$http.post('/comments/'+message_id, info).success(function(response){
			console.log('angular factory for add COMMENT reached', response);
			callback(response);
		})
	}

	return factory
});