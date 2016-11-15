(function () {
	var app = angular.module('app',['ngRoute','Login']);

	app.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				controller: 'LoginCtrl',
				templateUrl: 'app/views/login.html'
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