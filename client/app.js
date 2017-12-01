angular.module('ProCleanApp', ['ngRoute', 'ngResource', 'ProClean.directives', 'ProClean.controllers', 'ProClean.factories'])

.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html', 
		controller: 'ContactController'
	})
}])