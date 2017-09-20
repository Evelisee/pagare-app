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
		}
	}
})