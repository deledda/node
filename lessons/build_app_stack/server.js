var http = require("http");
var url = require("url");

function start(route, handle)
{
	// var http = require("http");
	// 
	// http.createServer(function(request, response) {
	//   response.writeHead(200, {"Content-Type": "text/plain"});
	//   response.write("Hello I am here");
	//   response.end();
	// }).listen(8888);
	// 
	var requestCount;
	requestCount = 0;

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		requestCount = requestCount + 1;
		if (pathname ==="/favicon.ico")
		{
			console.log("------- "+ requestCount + " /favicon.ico callback ------- ");
		}
		else
		{
			console.log("TTTTTTTT "+ requestCount + ". callback server.onReqeust function begin TTTTTTTT ");
		}
		
		console.log("onRequest pathname==" + pathname + "== recieved");
		
		route(handle, pathname, response);
		
		// var v_query = url.parse(request.url).query;
		// console.log("onRequest query==" + v_query + "== recieved");
		// 
		// console.log("onRequest: ", request.headers);

	}

	var httpServer = http.createServer(onRequest);
	httpServer.listen(8888);

	console.log("my first app http server is started");
}

exports.start = start;


