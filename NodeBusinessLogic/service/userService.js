

var userDBService = require("NodeDatamodel/service/userDBService")
	, regExpUserName = /^[A-z0-9 ]+$/g;


function getIp(req) {
	return req.connection.remoteAddress || 
    req.socket.remoteAddress ||
    req.headers['x-forwarded-for'] ||
    req.connection.socket.remoteAddress;
}


exports.getUsers = function(callback) {
	userDBService.getUsers(callback);
};


exports.getUserByName = function(name, request, callback) {
	if(name.match(regExpUserName)) {
		userDBService.getUserByName(name, callback);
	} else {
		if(request) {
			console.warn("Potential SQL injection attack on " +
					"getUserByName (" + name + ") from: " + getIp(request));
		}
		callback({});
	}
};


exports.saveOrUpdateUserByName = function(user) {
	userDBService.saveOrUpdateUserByName(user);
};


exports.removeUserByName = function(name, request) {
	if(name.match(regExpUserName)) {
		userDBService.removeUserByName(name);
	} else {
		if(request) {
			console.warn("Potential SQL injection attack on " +
					"removeUserByName (" + name + ") from: " + getIp(request));
		}
	}
};

