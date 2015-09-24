var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');

module.exports = function(app) {

    // app.get('/', function(req, res){
    //     res.render()
    // })

    app.get('/messages', function(req, res) {
      messages.show(req, res);
    });

    app.get('/comments', function(req, res){
        comments.show(req, res);
    });

    app.post('/messages', function(req, res){
    	messages.add(req, res);
    });
    app.post('/comments/:id', function(req, res){
        comments.add(req, res);
    });
  }