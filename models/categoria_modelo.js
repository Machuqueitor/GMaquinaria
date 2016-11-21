var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.connect('mongodb://localhost/gestionmaq');

var categoria_schema = new Schema(
	{
	 categoria:String
	}
);

var tipoMaq_schema = new Schema(
	{
     nombre:String
     id_categoria:String
	}
);

var maquina_schema = new Schema(
	{
	 id_tipMaq:String,
	 patente:String,
     marca:String,
     modelo:String,

     id_cliente:String,
     estado:Boolean,
     fecha_ini:Date,
     fecha_ter:Date
	}
);