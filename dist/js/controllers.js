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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNVc2Vycy5qcyIsIkNBZGRVc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvY29udHJvbGxlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5jb250cm9sbGVyKCdDVXNlcnMnLCBmdW5jdGlvbiAoRkFwaSkge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdC8vIEdldCBhbGwgdXNlcnMgZnJvbSBBUElcblx0XHR2YXIgdXNlckxpc3RQcm9taXNlID0gRkFwaS5nZXRBbGxVc2VycygpO1xuXG5cdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdHVzZXJMaXN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0Ly8gVGFyZ2V0IG5lZWRlZCBkYXRhXG5cdFx0XHR2bS51c2VyTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0fSk7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBkZWxldGVVc2VyXG5cdFx0Ly8gQWJzdHJhY3Q6IERlbGV0ZXMgYSB1c2VyIGZyb20gdGhlIHVzZXJzIGxpc3Rcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5kZWxldGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcblx0XHRcdC8vIERlbGV0ZSB1c2VyIGZyb20gbGlzdCBvbiBzZXJ2ZXJcblx0XHRcdHZhciBkZWxldGVVc2VyUHJvbWlzZSA9IEZBcGkuZGVsZXRlVXNlcih1c2VyLl9pZCksXG5cdFx0XHQgICAgdXNlckluZGV4ID0gbnVsbDtcblxuXHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0ZGVsZXRlVXNlclByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gU2F2ZSBkZWxldGVkIHVzZXIgaW5mb1xuXHRcdFx0XHR2YXIgZGVsZXRlZFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCB1c2VyIGxpc3Rcblx0XHRcdFx0dm0udXNlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAodXNlciwgaW5kZXgpIHtcblx0XHRcdFx0XHQvLyBMb29rIGZvciBJRCBtYXRjaFxuXHRcdFx0XHRcdGlmICh1c2VyLl9pZCA9PT0gZGVsZXRlZFVzZXIuX2lkKSB7XG5cdFx0XHRcdFx0XHQvLyBTYXZlIGluZGV4IG9mIElEIG1hdGNoXG5cdFx0XHRcdFx0XHR1c2VySW5kZXggPSBpbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFdhcyBhIG1hdGNoIGZvdW5kP1xuXHRcdFx0XHRpZiAodXNlckluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gTm8gd2FybiB0aGUgdXNlciB0byByZWZyZXNoIHBhZ2Vcblx0XHRcdFx0XHRhbGVydCgnVGhlIHVzZXIgd2FzIHN1Y2Nlc3NmdWxseSBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlLCBidXQgY291bGQgbm90IGJlIGZvdW5kIGxvY2FsbHkuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIHRvIHVwZGF0ZSB5b3VyIHVzZXIgbGlzdGluZy4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBZZXMsIHJlbW92ZSB0aGF0IGluZGV4IGZvcm0gdXNlckxpc3QgYXJyYXlcblx0XHRcdFx0XHR2bS51c2VyTGlzdC5zcGxpY2UodXNlckluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblx0fSk7XG59KSgpOyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NBZGRVc2VyJywgZnVuY3Rpb24gKEZBcGksICRzdGF0ZSkge1xuXG5cdFx0dmFyIHZtID0gdGhpcztcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGFkZFVzZXJcblx0XHQvLyBBYnN0cmFjdDogQWRkcyBhIG5ldyB1c2VyIHRvIHRoZSB1c2VyIGxpc3Rcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5hZGRVc2VyID0gZnVuY3Rpb24gKGlzVmFsaWQsIGFkZFVzZXJGb3JtKSB7XG5cdFx0XHQvLyBJcyB0aGUgZm9ybSB2YWxpZD9cblx0XHRcdGlmIChpc1ZhbGlkKSB7XG5cdFx0XHRcdC8vIFllcywgcG9zdCB0aGUgaW1hZ2UgdmlhIERhdGFiYXNlIEFQSVxuXHRcdFx0XHR2YXIgbmV3VXNlclByb21pc2UgPSBGQXBpLmFkZE5ld1VzZXIodm0ucG9zdERhdGEpO1xuXG5cdFx0XHRcdC8vIE9uY2UgcmV0dXJuZWQuLi5cblx0XHRcdFx0bmV3VXNlclByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBSZXNwb25zZSBzdGF0dXMgMjAwP1xuXHRcdFx0XHRcdGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuXHRcdFx0XHRcdFx0Ly8gWWVzLCByZXNldCB0aGUgZm9ybVxuXHRcdFx0XHRcdFx0cmVzZXRGb3JtKGFkZFVzZXJGb3JtKTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVkaXJlY3QgdGhlIHVzZXIgdG8gdGhlIGhvbWUgdmlld1xuXHRcdFx0XHRcdFx0JHN0YXRlLmdvKCdob21lJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vLCB3YXJuIHRoZSB1c2VyIHRvIGNoZWNrIHZhbGlkYXRpb25cblx0XHRcdFx0YWxlcnQoJ1BsZWFzZSBlbnN1cmUgYWxsIGZpZWxkcyBhcmUgdmFsaWQgYW5kIHRyeSBhZ2Fpbi4nKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogcG9zdEltYWdlXG5cdFx0Ly8gQWJzdHJhY3Q6IEhhbmRsZXMgaW1hZ2UgcG9zdCBmb3JtXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIHJlc2V0Rm9ybSA9IGZ1bmN0aW9uIHJlc2V0Rm9ybShmb3JtKSB7XG5cdFx0XHQvLyBDbGVhciB0aGUgZm9ybSBkYXRhXG5cdFx0XHR2bS5wb3N0RGF0YSA9IHt9O1xuXG5cdFx0XHQvLyBSZXNldCBhbmd1bGFyIHN0YXRlc1xuXHRcdFx0Zm9ybS4kc2V0UHJpc3RpbmUoKTtcblx0XHRcdGZvcm0uJHNldFVudG91Y2hlZCgpO1xuXHRcdH07XG5cdH0pO1xufSkoKTsiXX0=
