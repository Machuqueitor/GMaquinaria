(function() {
	angular.module('Cliente', [])
	.controller('clienteCtrl', ['$scope','$rootScope','socket', function ($scope,$rootScope,socket) {
		$rootScope.estadoLog="true";

		$scope.agregarCliente = function(){
			var clienteNUevo = {
				rut      :$scope.Rut,
			  	nombre   :$scope.Nombre,
				apellido :$scope.Apellido,
				fecha_nac:$scope.Date,
				sexo     :$scope.Sexo,
				comuna   :$scope.Comuna,
				direccion:$scope.Direccion,
				tel_fijo :$scope.TelFijo,
				tel_movil:$scope.TelMovil,
				email    :$scope.Email
			};

			console.log($scope.Rut);
			socket.emit("insertCLiente",clienteNUevo); //emite un evento con un JSON con los datos a registrar 
		};

		
	}])
})();