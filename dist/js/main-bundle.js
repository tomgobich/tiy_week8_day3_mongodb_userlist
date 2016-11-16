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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvbWFpbi1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ3VpLnJvdXRlcicsICduZ0FuaW1hdGUnXSkuZmlsdGVyKCdib29sZWFuVG9ZZXNObycsIGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0XHQvLyBUcnVlP1xuXHRcdFx0aWYgKGlucHV0KSB7XG5cdFx0XHRcdC8vIFllcywgZGlzcGxheSAnWWVzJ1xuXHRcdFx0XHRyZXR1cm4gJ1llcyc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBObywgZGlzcGxheSAnTm8nXG5cdFx0XHRcdHJldHVybiAnTm8nO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0pLmNvbmZpZyhhcHBDb25maWcpO1xuXG5cdGFwcENvbmZpZy4kaW5qZWN0ID0gWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInXTtcblx0ZnVuY3Rpb24gYXBwQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0XHQkc3RhdGVQcm92aWRlci5zdGF0ZSgnaG9tZScsIHtcblx0XHRcdHVybDogJy8nLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9ob21lLmh0bWwnLFxuXHRcdFx0Y29udHJvbGxlcjogJ0NVc2VycycsXG5cdFx0XHRjb250cm9sbGVyQXM6ICdjb250cm9sbGVyJ1xuXHRcdH0pLnN0YXRlKCdhZGRVc2VyJywge1xuXHRcdFx0dXJsOiAnL2FkZC11c2VyJyxcblx0XHRcdHRlbXBsYXRlVXJsOiAncGFydGlhbHMvYWRkLXVzZXIuaHRtbCcsXG5cdFx0XHRjb250cm9sbGVyOiAnQ0FkZFVzZXInLFxuXHRcdFx0Y29udHJvbGxlckFzOiAnY29udHJvbGxlcidcblx0XHR9KTtcblx0fVxufSkoKTsiXX0=
