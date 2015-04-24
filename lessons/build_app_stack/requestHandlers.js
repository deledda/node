//var exec = require("child_process").exec;

var querystring = require("querystring");
function start(response, postData) {
	console.log("Request handler 'start' was called.");
	console.log("LLLLLLLLLLLL callback onReqeust function end at requestHandler start function LLLLLLLLLL");
	var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+
'charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text1" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData)
{
	console.log("request handler 'upload' was called");
	console.log("LLLLLLLLLLLL callback onReqeust function end at requestHandler upload function LLLLLLLLLL");
	var uploadContent = "^^^^^^^hello from reqeustHandlers.upload";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello I am in upload and here is the content==" + uploadContent + "==");
	response.write("here report back to your posted data==" + querystring.parse(postData).text1+"==");
	response.end();

}

exports.start = start;
exports.upload = upload;