'use strict';

// Declare app level module which depends on filters, and services
var mgsApp = angular.module('mgsApp', []).config(['$routeProvider',
function($routeProvider) {
	$routeProvider.
	when('/', {templateUrl : 'views/main/main.html',controller : 'MainCtrl'}).
	when('/aboutus', {templateUrl: 'views/main/aboutus.html', controller: 'AboutUsCtrl'}).
	when('/contact', {templateUrl: 'views/main/contact.html', controller: 'ContactCtrl'}).
	when('/portfolio', {templateUrl: 'views/main/portfolio.html', controller: 'PortfolioCtrl'}).
	otherwise({redirectTo : '/'});
}]);
