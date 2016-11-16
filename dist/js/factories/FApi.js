'use strict';

(function () {

	'use strict';

	angular.module('app').factory('FApi', function ($http) {

		// ------------------------------------------------------------
		// Name: getAllUsers
		// Abstract: Gets all users
		// ------------------------------------------------------------
		var getAllUsers = function getAllUsers() {
			var promise = $http({
				method: 'GET',
				url: 'http://localhost:3000/api/users'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: addNewUser
		// Abstract: Adds a new user
		// ------------------------------------------------------------
		var addNewUser = function addNewUser(user) {
			user.userID = Date.now() + Math.floor(Math.random() * (9999 - 1000) + 1000);

			// Validate jsFan boolean
			if (user.jsFan !== true) {
				user.jsFan = false;
			}

			var postObject = {
				user: user
			};

			var promise = $http({
				method: 'POST',
				data: postObject,
				url: 'http://localhost:3000/api/users'
			});

			return promise;
		};

		// ------------------------------------------------------------
		// Name: deleteUser
		// Abstract: Deletes a user
		// ------------------------------------------------------------
		var deleteUser = function deleteUser(userID) {
			var promise = $http({
				method: 'DELETE',
				url: 'http://localhost:3000/api/users/' + userID
			});

			return promise;
		};

		return {
			getAllUsers: getAllUsers,
			addNewUser: addNewUser,
			deleteUser: deleteUser
		};
	});
})();