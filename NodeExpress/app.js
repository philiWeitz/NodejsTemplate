
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , rest = require('./routes/rest')
  , userCtrl = require('./routes/userCtrl');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// add custom services
global.userService = require('NodeBusinessLogic/service/userService');


// development only
if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/textResult', rest.textResult);
app.get('/jsonResult', rest.jsonResult);
app.get('/urlParameter', rest.urlParameter);
app.post('/postExample', rest.postExample);

// add user rest service
app.get('/user/getUsers', userCtrl.getUsers);
app.get('/user/removeUser', userCtrl.removeUser);
app.post('/user/addUser', userCtrl.addUser);


http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
