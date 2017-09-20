angular.module('config', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider, $qProvider) {

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

	// Contatos
	.state('contatos', {
		url: '/contatos',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/contatos.html',
				// controller: 'Login'
			}
		}
	})

	.state('contatos.profile', {
		url: '/contatos/profile/:id',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/profile.html',
				// controller: 'Login'
			}
		}
	})

	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('inicio');

	$qProvider.errorOnUnhandledRejections(false);
});