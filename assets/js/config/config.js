angular.module('config', ['ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider, $qProvider) {

	$stateProvider
	.state('inicio', {
		url: '/inicio',                   
		views: {
			'content@': {
				templateUrl: 'components/inicio/home.html',
			}
		}
	})

	// Contatos
	.state('contatos', {
		url: '/contatos',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/contatos.html',
			}
		}
	})

	.state('contatos.profile', {
		url: '/perfil/:id',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/profile.html',
				controller: 'profileController'
			}
		}
	})

	.state('contatos.edit', {
		url: '/edit/:id',                   
		views: {
			'content@': {
				templateUrl: 'components/contatos/edit-partner.html',
				controller: 'editController'
			}
		}
	})

	;
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('inicio');

	$qProvider.errorOnUnhandledRejections(false);
});