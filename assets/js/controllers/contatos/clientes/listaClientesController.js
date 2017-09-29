angular.module('controllers')

.controller('listaClientesController', function($scope, $rootScope, $mdSidenav, $state, $timeout, contatos){
	$rootScope.title = 'Contatos';
	$rootScope.greyBlock = true;
	// Puxando clientes
	if($rootScope.partners == undefined){
		$scope.loadingClientes = true;
		var retornoClientes = contatos.retornarClientes();
		retornoClientes.then(function(data){
			$rootScope.partners = data.results;
			$scope.loadingClientes = false;
		}).catch(function(error){
			// inserir warning
		});
	} else {
		$scope.loadingClientes = false;
	}

	$scope.seePartner = function(idProfile){
		$state.go('contatos.profile', {id:idProfile});
	}

	$scope.addNovoContato = function(){
		$state.go('contatos.novo');
	}

	$scope.favoriteChange = function(objeto){
		objeto.favourite = !objeto.favourite;
		var retornoFavorito = contatos.atualizarFavorito(objeto.id, objeto.favourite);
		retornoClientes.then(function(data){
		}).catch(function(error){
			// inserir warning
		});
	}
	
})