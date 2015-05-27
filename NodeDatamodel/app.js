

var http = require('http')
	,userDBService = require('./service/userDBService');



function onRequest(request, response) {
	
	response.writeHead(200);
	response.end("Valid Request");
}

http.createServer(onRequest).listen(3000);


// test database
userDBService.addUser({'name': 'My Name', 'age': 27});

userDBService.getUsers(function(res) {
	console.log("Get users: ");
	console.log(res);
});

userDBService.getUserByName('My Name', function(res) {
	console.log("Get user by name: ");
	console.log(res);
});

userDBService.saveOrUpdateUserByName({'name': 'My Name', 'age': 20});
userDBService.saveOrUpdateUserByName({'name': 'My Name 2', 'age': 40});


setTimeout(function() {
	userDBService.getUsers(function(res) {
		console.log("Get users: ");
		console.log(res);
	});
	
	setTimeout(function() {
		userDBService.removeUserByName('My Name');
		userDBService.removeUserByName('My Name 2'); 
		
		console.log("Removed all users");
		
		userDBService.getUsers(function(res) {
			console.log("Get users: ");
			console.log(res);
		});
	}, 1000);
	
}, 1000);

