'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CAddUser', function (FApi, $state) {

		var vm = this;

		// ------------------------------------------------------------
		// Name: addUser
		// Abstract: Adds a new user to the user list
		// ------------------------------------------------------------
		vm.addUser = function (isValid, addUserForm) {
			// Is the form valid?
			if (isValid) {
				// Yes, post the image via Database API
				var newUserPromise = FApi.addNewUser(vm.postData);

				// Once returned...
				newUserPromise.then(function (response) {
					// Response status 200?
					if (response.status === 200) {
						// Yes, reset the form
						resetForm(addUserForm);

						// Redirect the user to the home view
						$state.go('home');
					}
				});
			} else {
				// No, warn the user to check validation
				alert('Please ensure all fields are valid and try again.');
			}
		};

		// ------------------------------------------------------------
		// Name: postImage
		// Abstract: Handles image post form
		// ------------------------------------------------------------
		var resetForm = function resetForm(form) {
			// Clear the form data
			vm.postData = {};

			// Reset angular states
			form.$setPristine();
			form.$setUntouched();
		};
	});
})();