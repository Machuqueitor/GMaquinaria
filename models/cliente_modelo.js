var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/gestionmaq');

var cliente_schema = new Schema(
	{
	  	rut:String,
	  	nombre:String,
		apellido:String,
		fecha_nac:Date,
		sexo:Boolean,
		comuna:String,
		direccion:String,
		tel_fijo:Integer,
		tel_movil:Integer,
		email:String
	}
);

var cliente = mongoose.model('Cliente', cliente_schema);
