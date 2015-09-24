// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
//require body parser
var bodyParser = require('body-parser');
// instantiate the app
var app = express();
app.use(bodyParser.json());

//require mongoose
require('./server/config/mongoose.js');
//require the routes file server-side
require('./server/config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
//set up server port listening
app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});