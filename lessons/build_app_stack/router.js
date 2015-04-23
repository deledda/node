function route(handle, pathname, response)
{
	console.log("route function is about to route a reqeust for==" + pathname + "==");
	var routerContent;
	if (typeof handle[pathname] === 'function')
	{
		handle[pathname](response);
	}
	else
	{
		console.log("no request handler found for ==" + pathname + "==");
		routerContent = "404 not found. offered by router.route function";
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello I am here and here is the content==" + routerContent + "==");
		response.end();
	}
}

exports.route = route;