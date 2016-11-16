'use strict';

(function () {

	'use strict';

	angular.module('app', ['ui.router', 'ngAnimate']).filter('booleanToYesNo', function () {
		return function (input) {
			// True?
			if (input) {
				// Yes, display 'Yes'
				return 'Yes';
			} else {
				// No, display 'No'
				return 'No';
			}
		};
	}).config(appConfig);

	appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function appConfig($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'partials/home.html',
			controller: 'CUsers',
			controllerAs: 'controller'
		}).state('addUser', {
			url: '/add-user',
			templateUrl: 'partials/add-user.html',
			controller: 'CAddUser',
			controllerAs: 'controller'
		});
	}
})();