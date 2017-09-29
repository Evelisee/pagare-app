angular.module('directives')
.directive('formularioCadastro', function($compile) {
	return {
		restrict: 'E',
		// scope: true,
		templateUrl: 'assets/js/directives/contatos/contents/formulario.html'
	}
})