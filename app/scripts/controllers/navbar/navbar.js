'use strict';

function NavBarCtrl($scope, $location) {
	$scope.navClass = function(page) {
		var currentRoute = $location.path().substring(1) || 'home';
		console.log(currentRoute ? 'active' : '');
		return page == currentRoute ? 'active' : '';
	}
}