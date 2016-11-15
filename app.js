var	express = require('express');
var	app 	= express();
var port 	= process.env.PORT || 8000;


app.listen(port, function(){
	console.log('listening on *:8000');
});

require('./config')(app);
