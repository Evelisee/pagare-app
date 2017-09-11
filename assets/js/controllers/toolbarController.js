angular.module('controllers')

.controller('toolbarController', function($scope, $rootScope, $mdSidenav){

	$scope.toggleLeft = buildToggler('left');
	$scope.toggleRight = buildToggler('right');
	$rootScope.title = 'Pagare';

	function buildToggler(componentId) {
		return function() {
			$mdSidenav(componentId).toggle();
		};
	}
});