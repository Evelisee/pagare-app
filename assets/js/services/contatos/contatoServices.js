angular.module('services')

.factory('contatos', function($http, $q){
	return{
		retornarClientes:function(){

			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/partner/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});

			// return deferred.promise;
		},
		retornarDadosProfile:function(idParam){

			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/partner/'+ idParam +'/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				console.log(response.data);
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});

			// return deferred.promise;
		},
		retornarDadosEdicao:function(cpfIdentificacao){
			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/address/147/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		retornarDadosBancos:function(){
			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/bank-account/64/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		retornarEstados:function(){
			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/state/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				console.log(response)
				return response.data.results;
			})
			.catch(function(error){
				return error.data;
			});
		},
		retornarBancos:function(){
			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/bank/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				console.log(response)
				return response.data.results;
			})
			.catch(function(error){
				return error.data;
			});
		},
		salvarDadosContato:function(cpfUser, dadosNovos){
			return $http({
					url: 'http://dev.api.pagare.io/address/147/',
					method: 'PUT',
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc=',
					'Content-Type': 'application/json'
				},
				data: dadosNovos
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		salvarDadosPartner:function(partnerId, dadosNovos){
			return $http({
					url: 'http://dev.api.pagare.io/partner/'+ partnerId +'/',
					method: 'PATCH',
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc=',
					'Content-Type': 'application/json'
				},
				data: dadosNovos
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		salvarDadosBancoContato:function(partnerId, dadosNovos){
			return $http({
					url: 'http://dev.api.pagare.io/bank-account/64/',
					method: 'PATCH',
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc=',
					'Content-Type': 'application/json'
				},
				data: dadosNovos
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		atualizarFavorito:function(idPartner, param){
			var deferred = $q.defer();
			return $http({
					url: 'http://dev.api.pagare.io/partner/266/',
					method: 'PATCH',
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc=',
					'Content-Type': 'application/json',
				},
				data: {favourite: param}
			}).
			then(function(response) {
				console.log(response)
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		criarNovoPartner:function(partnerId, dadosNovos){
			return $http({
					url: 'http://dev.api.pagare.io/partner/',
					method: 'POST',
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc=',
					'Content-Type': 'application/json'
				},
				data: dadosNovos
			}).
			then(function(response) {
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		}
	}
})