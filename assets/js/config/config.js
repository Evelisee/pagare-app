angular.module('config', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('inicio', {
		url: '/inicio',                   
		views: {
			'content@': {
				templateUrl: 'components/inicio/home.html',
				// controller: 'Login'
			}
		}
	})
	.state('contatos', {
		url: '/contatos',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/contatos.html',
				// controller: 'Login'
			}
		}
	})

	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('inicio');
});