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
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/gestionmaq');
// Coneccion a la BD getionmaq

var cliente = require('./models/cliente_modelo').clienteEsquema;
var categoria = require('./models/categoria_modelo').categoriaEsquema; 

require('./config')(app);
require('./events')(io,cliente,categoria);