(function () {
	var app = angular.module('app',['ngRoute','Login','Cliente','Cuenta']);

	app.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				controller: 'LoginCtrl',
				templateUrl: 'app/views/login.html'
			})
			.when('/Cliente',{
				controller: 'clienteCtrl',
				templateUrl: 'app/views/reg_cliente.html'
			})
			.when('/Cuenta',{
				controller: 'cuentaCtrl',
				templateUrl: 'app/views/config_acc.html'
			})
	})
	

	app.directive('navbarDir', function () {
		return {
			restric	:'E',
			templateUrl:'app/directives/navbar.html'

		};
	})
	app.directive('sideDir',function(){
		return{
			restric :'E',
			templateUrl:'app/directives/slide.html'
		}
	})

})();