angular.module('controllers')

.controller('toolbarController', function($scope, $rootScope, $mdSidenav, $mdMenu, $window){

	$scope.toggleLeft = buildToggler('left');
	$scope.toggleRight = buildToggler('right');
	$rootScope.title = 'Pagare';
	$rootScope.greyBlock = false;

	function buildToggler(componentId) {
		return function() {
			$mdSidenav(componentId).toggle();
		};
	}

	$scope.goBack = function(){
		$window.history.back();
	}

	$scope.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };
});