angular.module('controllers')

.controller('novoClienteController', function($scope, $stateParams,$state, $q, contatos){
	var cpf = $stateParams.cpf;

	$q.all([contatos.retornarEstados(), contatos.retornarBancos()]).then(function(data) {
	    $scope.estados = data[0].results;
	    $scope.bancos = data[1].results;
	    $scope.loadingData = false;
	});
	
})