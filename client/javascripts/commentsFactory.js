messageApp.factory('CommentFactory', function($http){
	
	var factory = {};

	// factory.getComments = function(callback){
	// 	$http.get('/comments').success(function(output){
	// 		callback(output);
	// 	})
	// }

	factory.addComment = function(info, callback){
		console.log('factory add comment')
		console.log(info);
		$http.post('/comments', info).success(function(response){
			callback(response);
		})
	}

	return factory
});