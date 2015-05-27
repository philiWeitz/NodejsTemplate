

var dbUtil = require('../src/common/databaseUtil')
	, collectionName = 'userCollection';


function addUser(user) {
	dbUtil.save(collectionName, user);
}


exports.getUsers = function(callback) {
	dbUtil.getAll(collectionName, callback);
};


exports.getUserByName = function(name, callback) {
	dbUtil.getSingleBy(collectionName, {'name': name}, callback);
};


exports.saveOrUpdateUserByName = function(user) {
	exports.getUserByName(user.name, function(res) {
		if(null === res) {
			addUser(user);
		} else {
			dbUtil.updateBy(collectionName, user, {'name': user.name});
		}
	});
};


exports.removeUserByName = function(name) {
	dbUtil.removeBy(collectionName, {'name': name});
};

