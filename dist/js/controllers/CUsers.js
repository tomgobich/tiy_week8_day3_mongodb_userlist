'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CUsers', function (FApi) {

		var vm = this;

		// Get all users from API
		var userListPromise = FApi.getAllUsers();

		// Once returned...
		userListPromise.then(function (response) {
			// Target needed data
			vm.userList = response.data;
		});

		// ------------------------------------------------------------
		// Name: deleteUser
		// Abstract: Deletes a user from the users list
		// ------------------------------------------------------------
		vm.deleteUser = function (user) {
			// Delete user from list on server
			var deleteUserPromise = FApi.deleteUser(user._id),
			    userIndex = null;

			// Once returned...
			deleteUserPromise.then(function (response) {
				// Save deleted user info
				var deletedUser = response.data;

				// Loop through user list
				vm.userList.forEach(function (user, index) {
					// Look for ID match
					if (user._id === deletedUser._id) {
						// Save index of ID match
						userIndex = index;
					}
				});

				// Was a match found?
				if (userIndex === null) {
					// No warn the user to refresh page
					alert('The user was successfully deleted from the database, but could not be found locally. Please refresh the page to update your user listing.');
				} else {
					// Yes, remove that index form userList array
					vm.userList.splice(userIndex, 1);
				}
			});
		};
	});
})();