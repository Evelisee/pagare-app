angular.module('controllers')

.controller('novoClienteController', function($scope, $rootScope,$stateParams,$state, $q, contatos){
	var cpf = $stateParams.cpf;

	$q.all([
		contatos.retornarEstados(),
		contatos.retornarBancos()
	]).then(function(data) {
	    $scope.estados = data[0].results;
	    $scope.bancos = data[1].results;
	    $scope.loadingData = false;
	});

	$scope.saveNewPartner = function(){
		$scope.loadingData = true;

		// Creating Data for Partner
		var dataPartner = {
			user: 201,
		    birth_date: null,
		    document_number: $scope.editUser.identification,
		    document_type: 'cpf',
		    email: $scope.editUser.email,
		    gender: "",
		    home_phone: "",
		    mobile_phone: $scope.editUser.main_phone,
		    name: $scope.editUser.name,
		    work_phone: $scope.editUser.home_phone,
		    mothers_name: "",
		    status: "active",
		    favourite: false,
		    internal: null,
		    internal_status: "inactive",
		    default: true,
		    type: "contact"
		};

		var dataAddress = $rootScope.editUser;
		var createPartner = contatos.criarNovoPartner($stateParams.partner, dataPartner);
		createPartner.then(function(data){
			// Yeah, success!
			$scope.loadingData = false;
			$mdDialog.show(
		   		$mdDialog.alert()
				.title('Sucesso!')
				.textContent('Dados alterados com sucesso!')
				.ok('Ok')
		    );
		}).catch(function(error){
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