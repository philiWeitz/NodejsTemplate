


var MongoClient = require('mongodb').MongoClient
  , format = require('util').format
  , url = 'mongodb://localhost:27017/nodeExample';



exports.save = function(collectionName, obj) {
	
	//connect away
	MongoClient.connect(url, function(err, db) {
		
		if (err) {
			throw err;
		}
  
		//insert record
		db.collection(collectionName).insert(obj);
	});
};


exports.getAll = function(collectionName, callback) {	
	//connect away
	MongoClient.connect(url, function(err, db) {
		
		if (err) {
			throw err;
		}
  
		db.collection(collectionName).find().toArray(function(err, docs){
		    callback(docs);
		});
	});
};


exports.getSingleBy = function(collectionName, query, callback) {	
	//connect away
	MongoClient.connect(url, function(err, db) {
		
		if (err) {
			throw err;
		}
  
		db.collection(collectionName).findOne(query, function(err, doc) {
			callback(doc);
		});
	});
};


exports.updateBy = function(collectionName, obj, criteria) {	
	//connect away
	MongoClient.connect(url, function(err, db) {
		
		if (err) {
			throw err;
		}
  
		db.collection(collectionName).update(criteria, obj);
	});
};


exports.removeBy = function(collectionName, criteria) {	
	//connect away
	MongoClient.connect(url, function(err, db) {
		
		if (err) {
			throw err;
		}
  
		db.collection(collectionName).remove(criteria);
	});
};