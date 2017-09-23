angular.module('directives')
.directive('formularioCadastro', function($rootScope) {
	return {
		restrict: 'E',
		templateUrl: 'assets/js/directives/contatos/contents/formulario.html'
	}
})