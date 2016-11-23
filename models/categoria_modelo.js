var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var categoria_schema = new Schema(
	{
	 categoria:String
	}
);

var tipoMaq_schema = new Schema(
	{
     id_categoria:String,
     nombre:String
	}
);

var maquina_schema = new Schema(
	{
	 id_tipMaq:String,
	 patente:String,
     marca:String,
     modelo:String,

     id_cliente:String,
     fecha_ini:Date,
     fecha_ter:Date
	}
);




var categoriaEsquema = mongoose.model('categorias', categoria_schema);
var tipoMaqEsquema = mongoose.model('TipoMaquinaria',tipoMaq_schema);

module.exports.categoriaEsquema=categoriaEsquema;