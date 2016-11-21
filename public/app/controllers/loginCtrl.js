(function() {
	angular.module('Login', [])
	.controller('LoginCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		
		$scope.verificar=function(rutLog,passLog){

			 socket.emit("log",data)
				if(rutLog==1 && passLog == 1){
					$rootScope.estadoLog = true;
					location.hash ="/Cliente";
				}else{
					$rootScope.estadoLog = false;
					location.hash ="/";
				}
				
		};
		

	}])
})();