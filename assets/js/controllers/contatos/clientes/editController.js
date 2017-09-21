angular.module('controllers')

.controller('editController', function($scope, $stateParams,$state, $q, contatos){
	var cpf = $stateParams.cpf;
	$scope.loadingData = true;

	// Busca Estados
	// var estados = contatos.retornarEstados();
	// estados.then(function(data){
	// 	$scope.estados = data.results;
	// }).catch(function(error){
	// 	// inserir warning
	// });

	// var bancos = contatos.retornarBancos();
	// bancos.then(function(data){
	// 	$scope.bancos = data.results;
	// }).catch(function(error){
	// 	// inserir warning
	// });

	// var retornoClientes = contatos.retornarDadosEdicao(cpf);
	// 	retornoClientes.then(function(data){
	// 		$scope.editUser = data.results[0];
	// 		$scope.loadingData = false;
	// 	}).catch(function(error){
	// 		// inserir warning
	// 	});

	$q.all([contatos.retornarEstados(), contatos.retornarBancos(),contatos.retornarDadosEdicao(cpf)]).then(function(data) {
	    console.log("ALL INITIAL PROMISES RESOLVED");
	    console.log(data);
	    $scope.estados = data[0].results;
	    $scope.bancos = data[1].results;
	    $scope.editUser = data[2].results[0];
	    $scope.loadingData = false;
	});

	$scope.editarPofile = function(idUser){
		$state.go('contatos.edit', {id: idUser});
	}
})