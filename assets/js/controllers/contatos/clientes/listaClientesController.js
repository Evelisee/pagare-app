angular.module('controllers')

.controller('listaClientesController', function($scope, $rootScope, $mdSidenav, $state){
	$scope.favoritos = [
		{nome: 'Ana Maria', email: 'anamaria@gmail.com'},
		{nome: 'Karla Maria', email: 'karlamaria@gmail.com'},
		{nome: 'Zé Beleu', email: 'zebeleu@gmail.com'}
	];

	$scope.todos = [
		{nome: 'Bruno Dagoberto', email: 'mail@gmail.com'},
		{nome: 'Paulo Manobrero', email: 'mail@gmail.com'},
		{nome: 'José Cage', email: 'mail@gmail.com'},
		{nome: 'Vanessa de Jesus', email: 'mail@gmail.com'},
		{nome: 'Victor Condensado', email: 'mail@gmail.com'}
	];
})