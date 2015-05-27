

exports.addUser = function(req, res) {
	var body = "";
	
	req.on('data', function(chunk) {
		body += chunk;
	});
		
	req.on('end', function() {
		console.log('create user: ' + body);
		global.userService.saveOrUpdateUserByName(JSON.parse(body));
		
		res.writeHead(200);
		res.end("Success");
	});
};


exports.removeUser = function(req, res) {
	var name = req.param("name");
	
	if(name) {
		global.userService.removeUserByName(name, req);
		
		res.writeHead(200);
		res.end("Success");
	} else {
		res.writeHead(404);
		res.end("Bad Request");
	}
};


exports.getUsers = function(req, res) {
	global.userService.getUsers(function(result) {
		res.writeHead(200, {
			"Context-Type" : "application/json"
		});
		
		res.end(JSON.stringify(result));
	});
};