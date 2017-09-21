angular.module('controllers')

.controller('profileController', function($scope, $stateParams,$state, $rootScope,contatos){
	var idProfile = $stateParams.id;

	if($rootScope.user == undefined){
		$scope.loadingProfile = true;
		var retornoClientes = contatos.retornarDadosProfile(idProfile);
			retornoClientes.then(function(data){
				$rootScope.user = data;
				$scope.loadingProfile = false;
			}).catch(function(error){
				// inserir warning
			});
	} else {
		$scope.loadingProfile = false;
	}

	$scope.editarPofile = function(cpfUser){
		$state.go('contatos.edit', {id: cpfUser});
	}
})