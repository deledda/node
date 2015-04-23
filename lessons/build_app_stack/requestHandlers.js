var exec = require("child_process").exec;

function start(response)
{
	console.log("request handler 'start' was called");
	console.log("LLLLLLLLLLLL callback onRequest function end at requestHandler start function LLLLLLLLLL");
	var startContent = "empty";
	
	exec("ls -lah", 
	function(error, stdout, stderr)
	{
		/* this is a blocking operation = take up so much resource. Because Node is the one who do this work, and there is only one node processor to do it, this work will make the other reqeust wait. So, solow response time for all request coame after this reqeust. One better option is follow this rule of thrumb: whenever node have work that take a long time to do, out source it to other processor to do like shell.  
		var dummyi = 0;
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + 10000)
		{
			dummyi = dummyi + 1;
		}
		*/
		startContent = "***** stdout from reqeustHandlers.start==" + stdout + "== and stderr ==" + stderr + "==";
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello I am in start and here is the content==" + startContent + "==");
		response.write(stdout);
		response.end();
	});

}

function upload(response)
{
	console.log("request handler 'upload' was called");
	console.log("LLLLLLLLLLLL callback onReqeust function end at requestHandler upload function LLLLLLLLLL");
	var uploadContent = "^^^^^^^hello from reqeustHandlers.upload";
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello I am in upload and here is the content==" + uploadContent + "==");
	response.end();

}

exports.start = start;
exports.upload = upload;