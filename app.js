var app = angular.module('managerApp', ['ngRoute','angularUtils.directives.dirPagination']);

app.config(function($routeProvider){
	$routeProvider.when("/pessoas", {
		templateUrl : "views/pessoa.html",
		controller : "pessoaController",
        access: { requiredLogin: false }
	});
});

//pakage app : zip -r ../${PWD##*/}.nw *