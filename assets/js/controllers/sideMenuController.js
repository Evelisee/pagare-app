angular.module('controllers')

.controller('sideMenuController', function($scope, $rootScope, $mdSidenav, $state){
	$scope.goToPage = function(state){
		$state.go(state);
		$mdSidenav('left').toggle();
	}
})