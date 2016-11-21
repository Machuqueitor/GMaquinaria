(function () {
	var app = angular.module('app',['ngRoute','Login','Cliente','Cuenta','Disp']);

	app.factory('socket', function() {
	    var socket = io();
	    return socket;
	});


	//Rutas
	app.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				controller : 'LoginCtrl',
				templateUrl: 'app/views/login.html'
			})
			.when('/Cliente',{
				controller : 'clienteCtrl',
				templateUrl: 'app/views/reg_cliente.html'
			})
			.when('/Cuenta',{
				controller : 'cuentaCtrl',
				templateUrl: 'app/views/config_acc.html'
			})
			.when('/Maquinaria',{
				controller : 'dispCtrl',
				templateUrl: 'app/views/maq_disponible.html'
			})
	})
	


	//Directivas
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