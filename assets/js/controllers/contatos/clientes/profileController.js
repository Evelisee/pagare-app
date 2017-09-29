angular.module('controllers')

.controller('profileController', function($scope, $stateParams,$state, $rootScope,contatos){
	var idProfile = $stateParams.id;
	var cpfUser;

	if($rootScope.user == undefined){
		$scope.loadingProfile = true;
		var retornoClientes = contatos.retornarDadosProfile(idProfile);
			retornoClientes.then(function(data){
				$rootScope.user = data;
				cpfUser = data.document_number;
				$scope.loadingProfile = false;
			}).catch(function(error){
				// inserir warning
			});


		var retornoEndereco = contatos.retornarDadosEdicao(cpfUser);
		retornoEndereco.then(function(data){
			var dataAddress = data.results[0];
			$scope.user.address = dataAddress.street;
			$scope.user.number = dataAddress.number;
			$scope.user.complement = dataAddress.complement;
			$scope.user.city = dataAddress.city;
			$scope.user.zipcode = dataAddress.zipcode;

		}).catch(function(error){

		});
	} else {
		$scope.loadingProfile = false;
	}

	$scope.editarPofile = function(cpfUser, idPartner){
		$state.go('contatos.edit', {id: cpfUser, partner:idPartner});
	}
})