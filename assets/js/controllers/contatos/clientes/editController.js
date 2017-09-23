angular.module('controllers')

.controller('editController', function($scope, $stateParams,$state, $q, contatos){
	var cpf = $stateParams.cpf;
	$scope.loadingData = true;

	$q.all([contatos.retornarEstados(), contatos.retornarBancos(),contatos.retornarDadosEdicao(cpf)]).then(function(data) {
	    $scope.estados = data[0].results;
	    $scope.bancos = data[1].results;
	    $scope.editUser = data[2].results[0];
	    $scope.loadingData = false;
	});

	// $scope.editarPofile = function(idUser){
	// 	$state.go('contatos.edit', {id: idUser});
	// }

	$scope.salvarDados = function(){
		var dadosNovos = $scope.editUser;
		var dadosSalvos  = contatos.salvarDadosContato($stateParams.id, dadosNovos);
		dadosSalvos.then(function(data){
			console.log(data);
		})
		console.log(dadosNovos);

	}
})