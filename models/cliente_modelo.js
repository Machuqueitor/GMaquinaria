var mongoose = require('mongoose');
var Schema   = mongoose.Schema;


var cliente_schema = new Schema(
	{
	  	rut:String,
	  	nombre:String,
		apellido:String,
		fecha_nac:Date,
		sexo:Boolean,
		comuna:String,
		direccion:String,
		tel_fijo:String,
		tel_movil:String,
		email:String
	}
);

var clienteEsquema = mongoose.model('Cliente', cliente_schema);


module.exports.clienteEsquema=clienteEsquema;




