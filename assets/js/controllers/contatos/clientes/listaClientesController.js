angular.module('controllers')

.controller('listaClientesController', function($scope, $rootScope, $mdSidenav, $state, $timeout, contatos){

	$scope.loadingClientes = true;
	
	// Puxando clientes
	var retornoClientes = contatos.retornarClientes();
	retornoClientes.then(function(data){
		$scope.partners = data.results;
		$timeout(function() {
			$scope.loadingClientes = false;
		}, 400);
	}).catch(function(error){
		// inserir warning
	});


	$scope.seePartner = function(idProfile){
		$state.go('contatos.profile', {id:idProfile});
	}
	
})