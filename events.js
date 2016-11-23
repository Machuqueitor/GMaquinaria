//escuchar sockets desde servidor
module.exports=function(io,cliente,categoria){
	io.sockets.on('connection',function(socket){

		socket.on('insertCLiente',function(response){
			var clienteBD = new cliente(response);
			clienteBD.save( function(){
				console.log("se guardo exitosamente");
			});
		});

		categoria.find( {}, function (err, res) {
			if(err){
				console.log("entro en err");
			}else{	
				//console.log("entro a emit"+res);
				io.emit('categorias', res);
			}
		});

		socket.on('disconnect', function() {
			console.log('user disconnected socket');
		});

	});
};