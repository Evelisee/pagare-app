angular.module('controllers')

.controller('editController', function($scope, $stateParams,$state, $q, $mdDialog, contatos){
	// ---------- Variables Base
		var cpf = $stateParams.cpf;
		var partner = $stateParams.partner;
		$scope.loadingData = true;
		$scope.labelStatus = false;

	$q.all([
			contatos.retornarEstados(),
			contatos.retornarBancos(),
			contatos.retornarDadosEdicao(cpf),
			contatos.retornarDadosProfile(partner),
			contatos.retornarDadosBancos()
		]).then(function(data) {
	    $scope.estados = data[0];
	    $scope.bancos = data[1];
	    $scope.editUser = data[2];
	    $scope.editUser.name = data[3].name;
	    $scope.editUser.bank = data[4].bank;
	    $scope.editUser.account_number = data[4].account_number;
	    $scope.editUser.agency = data[4].agency;
	    $scope.loadingData = false;
	});


	$scope.salvarDados = function(){
		if(!$scope.edicaoContato.$valid){
			return false;
		}

		$scope.loadingData = true;

		// Creating Data for Partner
		var dataPartner = {
			name: $scope.editUser.name, 
			email: $scope.editUser.email,
			document_number: $scope.editUser.identification,
			mobile_phone: $scope.editUser.main_phone
		};
		// Creating Data for bank account
		var dataBank = {
			bank: $scope.editUser.bank,
			agency: $scope.editUser.agency,
			account_number: $scope.editUser.account_number
		};
		// Getting data for Address
		var dataAddress = $scope.editUser;

		// Save Partner data
		var savePartner = contatos.salvarDadosPartner($stateParams.partner, dataPartner);
		// Save address list data
		var saveAddress  = contatos.salvarDadosContato($stateParams.id, dataAddress);
		// Save bank account
		var saveBankAccount  = contatos.salvarDadosBancoContato($stateParams.id, dataBank);

		$q.all([
			saveAddress,
			savePartner,
			saveBankAccount
		]).then(function(data) {
			// Yeah, success!
			$scope.loadingData = false;
			$mdDialog.show(
		   		$mdDialog.alert()
				.title('Sucesso!')
				.textContent('Dados alterados com sucesso!')
				.ok('Ok')
		    );
		}).catch(function(error) {
			// Beh, error message!
			$scope.loadingData = false;
			$mdDialog.show(
		    	$mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Ops!')
				.textContent('Parece que algo deu errado.Por favor, tente novamente.')
				.ok('Ok')
		    );

		});

	}
})