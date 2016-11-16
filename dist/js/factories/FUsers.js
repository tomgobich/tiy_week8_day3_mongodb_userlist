'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		var userList = [];

		return {
			userList: userList
		};
	});
})();