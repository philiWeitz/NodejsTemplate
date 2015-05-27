


exports.textResult = function(req, res) {
	res.writeHead(200, {
		"Context-Type" : "text/plain"
	});
	res.write("This is a text result");
	res.end();
};


exports.jsonResult = function(req, res) {
	res.writeHead(200, {
		"Context-Type" : "application/json"
	});
	res.write("{'type': 'JSON Object'}");
	res.end();
};


exports.urlParameter = function(req, res) {
	res.writeHead(200, {
		"Context-Type" : "text/plain"
	});
	res.write("URL parameter test = " + req.param("test"));
	res.end();
};


exports.postExample = function(req, res) {
	var body = "";
		
	req.on('data', function(chunk) {
		body += chunk;
	});
		
	req.on('end', function() {
		console.log('Posted data: ' + body);
		res.writeHead(200);
		res.end("Posted correctly");
	});
};
