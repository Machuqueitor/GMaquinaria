(function() {
	angular.module('Login', [])
	.controller('LoginCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		
		$scope.verificar=function(rutLog,passLog){
			
			var user = {
				rutUser:rutLog,
				passUser:passLog
			};	
			//socket.emit('log',user);

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