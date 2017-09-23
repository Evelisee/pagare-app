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
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});

			// return deferred.promise;
		},
		retornarDadosEdicao:function(cpfIdentificacao){
			var deferred = $q.defer();
			return $http.get('http://dev.api.pagare.io/address/?Identification='+ cpfIdentificacao +'%2F&format=json', {
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
			return $http.get('http://dev.api.pagare.io/bank-account/?partner=266/?format=json', {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				console.log(response)
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
				return response.data;
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
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		},
		salvarDadosContato:function(cpfUser, dadosNovos){
			var data = JSON.stringify(dadosNovos);
			var deferred = $q.defer();
			return $http.post('http://dev.api.pagare.io/address/?Identification='+ cpfUser +'%2F&format=json/?Content='+data , {
				headers : {
					'Authorization': 'Basic NDIwOTM2MjI3MTg6a3doIz9lNUZrITIwMTc='
				}
			}).
			then(function(response) {
				console.log(response)
				return response.data;
			})
			.catch(function(error){
				return error.data;
			});
		}
	}
})