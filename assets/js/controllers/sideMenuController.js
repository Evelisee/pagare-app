angular.module('controllers')

.controller('sideMenuController', function($scope, $rootScope, $mdSidenav, $state){

	$scope.sideNav = [
		{icon: 'home', item: 'Início', state: 'inicio', last: false},
		{icon: 'assignment', item: 'Extrato', state: 'inicio', last: false},
		{icon: 'line_style', item: 'Pagamentos', state: 'inicio', last: false},
		{icon: 'compare_arrows', item: 'Transferências', state: 'inicio', last: false},
		{icon: 'credit_card', item: 'Cobranças', state: 'inicio', last: false},
		{icon: 'all_inclusive', item: 'Recorrências', state: 'inicio', last: false},
		{icon: 'group', item: 'Contatos', state: 'contatos', last: false},
		{icon: 'info', item: 'Sobre', state: 'contatos', last: true},
	]
	$scope.goToPage = function(state){
		$state.go(state);
		$mdSidenav('left').toggle();
	}
})