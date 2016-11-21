var	express = require('express'),
	session = require('express-session'),
	app 	= express(),
	port 	= process.env.PORT || 8000,
    io	    = require('socket.io').   //io carga la biblioteca de web sockets
								listen(
									app.listen(port, function(){
										console.log('listening on *:8000');
									})
								);



require('./config')(app);
