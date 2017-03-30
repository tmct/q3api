require('dotenv').config()
var signalR = require('signalr-client');
var client  = new signalR.client(

	//signalR service URL
	process.env.Q3_SERVER,

	// array of hubs to be supported in the connection
	['QHub']
);
var hub = client.hub('QHub');
hub.call(
	'ListQueues',
	'hub', 'invoked from hub' //additional parameters to match called signature
	)
 	.done(function (err, result) {
 		if (!err)  {
 			console.log("call returned: ", result);
 		}
 	});
