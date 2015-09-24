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

	factory.addComment = function(info, callback){
		console.log('angular FACTORY for add comment reached');
		console.log('logging info', info);
		$http.post('/comments', info).success(function(response){
			console.log('angular factory for add COMMENT reached');
			callback(response);
		})
	}

	return factory
});