(function() {
	angular.module('Login', [])
	.controller('LoginCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		$scope.verificar=function(rutLog,passLog){
				if(rutLog==1 && passLog == 1){
					$rootScope.estadoLog = true;
					location.hash ="/";
				}else{
					$rootScope.estadoLog = false;
					location.hash ="/";
				}
		};
		

	}])
})();