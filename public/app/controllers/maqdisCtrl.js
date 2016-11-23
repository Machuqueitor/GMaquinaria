(function() {
	angular.module('Disp', [])
	.controller('dispCtrl', ['$scope','$rootScope','socket',function ($scope,$rootScope,socket) {

		$rootScope.estadoLog="true"; // controlar las vistas

		socket.on('categorias',function(response){
			$scope.Categorias=response;
			$scope.$digest();
		});
		
		$scope.idActual = function (asd) {
			socket.emit('tipoMaq',id);
			console.log(asd);
		};
		//socket.emit('tipoMaq',selectCategoria);

	}])
})();