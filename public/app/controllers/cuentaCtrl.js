(function() {
	angular.module('Cuenta', [])
	.controller('cuentaCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
		$rootScope.estadoLog="true";
		
	}])
})();