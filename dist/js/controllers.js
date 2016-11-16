'use strict';

(function () {

	'use strict';

	angular.module('app').controller('CUsers', function (FApi) {

		var vm = this;

		vm.filterOptions = [{
			id: 1,
			name: 'All',
			value: 'all'
		}, {
			id: 2,
			name: 'JS Fan',
			value: 'isJSFan'
		}, {
			id: 3,
			name: 'Non JS Fan',
			value: 'noJSFan'
		}];

		// Set default selected filter
		vm.filterSelection = vm.filterOptions[0];

		// ------------------------------------------------------------
		// Name: getAllUsers
		// Abstract: Gets all users from database
		// ------------------------------------------------------------
		var getAllUsers = function getAllUsers() {
			// Get all users from API
			var userListPromise = FApi.getAllUsers();

			// Once returned...
			userListPromise.then(function (response) {
				// Target needed data
				vm.userList = response.data;
			});
		};

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

		// ------------------------------------------------------------
		// Name: filterUsers
		// Abstract: Filters user list by JavaScript fan status
		// ------------------------------------------------------------
		vm.filterUsers = function (selection) {
			switch (selection.value) {
				case 'isJSFan':
					selection = true;
					break;
				case 'noJSFan':
					selection = false;
					break;
				default:
					getAllUsers();
					selection = null;
					break;
			}

			if (selection !== null) {
				// Get all users from API
				var userListPromise = FApi.filterUsersByJSFan(selection);

				// Once returned...
				userListPromise.then(function (response) {
					// Target needed data
					vm.userList = response.data;
				});
			}
		};

		getAllUsers();
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNVc2Vycy5qcyIsIkNBZGRVc2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9jb250cm9sbGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmNvbnRyb2xsZXIoJ0NVc2VycycsIGZ1bmN0aW9uIChGQXBpKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0dm0uZmlsdGVyT3B0aW9ucyA9IFt7XG5cdFx0XHRpZDogMSxcblx0XHRcdG5hbWU6ICdBbGwnLFxuXHRcdFx0dmFsdWU6ICdhbGwnXG5cdFx0fSwge1xuXHRcdFx0aWQ6IDIsXG5cdFx0XHRuYW1lOiAnSlMgRmFuJyxcblx0XHRcdHZhbHVlOiAnaXNKU0Zhbidcblx0XHR9LCB7XG5cdFx0XHRpZDogMyxcblx0XHRcdG5hbWU6ICdOb24gSlMgRmFuJyxcblx0XHRcdHZhbHVlOiAnbm9KU0Zhbidcblx0XHR9XTtcblxuXHRcdC8vIFNldCBkZWZhdWx0IHNlbGVjdGVkIGZpbHRlclxuXHRcdHZtLmZpbHRlclNlbGVjdGlvbiA9IHZtLmZpbHRlck9wdGlvbnNbMF07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxVc2Vyc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCB1c2VycyBmcm9tIGRhdGFiYXNlXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbFVzZXJzID0gZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG5cdFx0XHQvLyBHZXQgYWxsIHVzZXJzIGZyb20gQVBJXG5cdFx0XHR2YXIgdXNlckxpc3RQcm9taXNlID0gRkFwaS5nZXRBbGxVc2VycygpO1xuXG5cdFx0XHQvLyBPbmNlIHJldHVybmVkLi4uXG5cdFx0XHR1c2VyTGlzdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gVGFyZ2V0IG5lZWRlZCBkYXRhXG5cdFx0XHRcdHZtLnVzZXJMaXN0ID0gcmVzcG9uc2UuZGF0YTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBkZWxldGVVc2VyXG5cdFx0Ly8gQWJzdHJhY3Q6IERlbGV0ZXMgYSB1c2VyIGZyb20gdGhlIHVzZXJzIGxpc3Rcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2bS5kZWxldGVVc2VyID0gZnVuY3Rpb24gKHVzZXIpIHtcblx0XHRcdC8vIERlbGV0ZSB1c2VyIGZyb20gbGlzdCBvbiBzZXJ2ZXJcblx0XHRcdHZhciBkZWxldGVVc2VyUHJvbWlzZSA9IEZBcGkuZGVsZXRlVXNlcih1c2VyLl9pZCksXG5cdFx0XHQgICAgdXNlckluZGV4ID0gbnVsbDtcblxuXHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0ZGVsZXRlVXNlclByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Ly8gU2F2ZSBkZWxldGVkIHVzZXIgaW5mb1xuXHRcdFx0XHR2YXIgZGVsZXRlZFVzZXIgPSByZXNwb25zZS5kYXRhO1xuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCB1c2VyIGxpc3Rcblx0XHRcdFx0dm0udXNlckxpc3QuZm9yRWFjaChmdW5jdGlvbiAodXNlciwgaW5kZXgpIHtcblx0XHRcdFx0XHQvLyBMb29rIGZvciBJRCBtYXRjaFxuXHRcdFx0XHRcdGlmICh1c2VyLl9pZCA9PT0gZGVsZXRlZFVzZXIuX2lkKSB7XG5cdFx0XHRcdFx0XHQvLyBTYXZlIGluZGV4IG9mIElEIG1hdGNoXG5cdFx0XHRcdFx0XHR1c2VySW5kZXggPSBpbmRleDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIFdhcyBhIG1hdGNoIGZvdW5kP1xuXHRcdFx0XHRpZiAodXNlckluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gTm8gd2FybiB0aGUgdXNlciB0byByZWZyZXNoIHBhZ2Vcblx0XHRcdFx0XHRhbGVydCgnVGhlIHVzZXIgd2FzIHN1Y2Nlc3NmdWxseSBkZWxldGVkIGZyb20gdGhlIGRhdGFiYXNlLCBidXQgY291bGQgbm90IGJlIGZvdW5kIGxvY2FsbHkuIFBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIHRvIHVwZGF0ZSB5b3VyIHVzZXIgbGlzdGluZy4nKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBZZXMsIHJlbW92ZSB0aGF0IGluZGV4IGZvcm0gdXNlckxpc3QgYXJyYXlcblx0XHRcdFx0XHR2bS51c2VyTGlzdC5zcGxpY2UodXNlckluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGZpbHRlclVzZXJzXG5cdFx0Ly8gQWJzdHJhY3Q6IEZpbHRlcnMgdXNlciBsaXN0IGJ5IEphdmFTY3JpcHQgZmFuIHN0YXR1c1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmZpbHRlclVzZXJzID0gZnVuY3Rpb24gKHNlbGVjdGlvbikge1xuXHRcdFx0c3dpdGNoIChzZWxlY3Rpb24udmFsdWUpIHtcblx0XHRcdFx0Y2FzZSAnaXNKU0Zhbic6XG5cdFx0XHRcdFx0c2VsZWN0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbm9KU0Zhbic6XG5cdFx0XHRcdFx0c2VsZWN0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Z2V0QWxsVXNlcnMoKTtcblx0XHRcdFx0XHRzZWxlY3Rpb24gPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VsZWN0aW9uICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIEdldCBhbGwgdXNlcnMgZnJvbSBBUElcblx0XHRcdFx0dmFyIHVzZXJMaXN0UHJvbWlzZSA9IEZBcGkuZmlsdGVyVXNlcnNCeUpTRmFuKHNlbGVjdGlvbik7XG5cblx0XHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0XHR1c2VyTGlzdFByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHQvLyBUYXJnZXQgbmVlZGVkIGRhdGFcblx0XHRcdFx0XHR2bS51c2VyTGlzdCA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRnZXRBbGxVc2VycygpO1xuXHR9KTtcbn0pKCk7IiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG5cdCd1c2Ugc3RyaWN0JztcblxuXHRhbmd1bGFyLm1vZHVsZSgnYXBwJykuY29udHJvbGxlcignQ0FkZFVzZXInLCBmdW5jdGlvbiAoRkFwaSwgJHN0YXRlKSB7XG5cblx0XHR2YXIgdm0gPSB0aGlzO1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogYWRkVXNlclxuXHRcdC8vIEFic3RyYWN0OiBBZGRzIGEgbmV3IHVzZXIgdG8gdGhlIHVzZXIgbGlzdFxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZtLmFkZFVzZXIgPSBmdW5jdGlvbiAoaXNWYWxpZCwgYWRkVXNlckZvcm0pIHtcblx0XHRcdC8vIElzIHRoZSBmb3JtIHZhbGlkP1xuXHRcdFx0aWYgKGlzVmFsaWQpIHtcblx0XHRcdFx0Ly8gWWVzLCBwb3N0IHRoZSBpbWFnZSB2aWEgRGF0YWJhc2UgQVBJXG5cdFx0XHRcdHZhciBuZXdVc2VyUHJvbWlzZSA9IEZBcGkuYWRkTmV3VXNlcih2bS5wb3N0RGF0YSk7XG5cblx0XHRcdFx0Ly8gT25jZSByZXR1cm5lZC4uLlxuXHRcdFx0XHRuZXdVc2VyUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdC8vIFJlc3BvbnNlIHN0YXR1cyAyMDA/XG5cdFx0XHRcdFx0aWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRcdFx0XHQvLyBZZXMsIHJlc2V0IHRoZSBmb3JtXG5cdFx0XHRcdFx0XHRyZXNldEZvcm0oYWRkVXNlckZvcm0pO1xuXG5cdFx0XHRcdFx0XHQvLyBSZWRpcmVjdCB0aGUgdXNlciB0byB0aGUgaG9tZSB2aWV3XG5cdFx0XHRcdFx0XHQkc3RhdGUuZ28oJ2hvbWUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gTm8sIHdhcm4gdGhlIHVzZXIgdG8gY2hlY2sgdmFsaWRhdGlvblxuXHRcdFx0XHRhbGVydCgnUGxlYXNlIGVuc3VyZSBhbGwgZmllbGRzIGFyZSB2YWxpZCBhbmQgdHJ5IGFnYWluLicpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBwb3N0SW1hZ2Vcblx0XHQvLyBBYnN0cmFjdDogSGFuZGxlcyBpbWFnZSBwb3N0IGZvcm1cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgcmVzZXRGb3JtID0gZnVuY3Rpb24gcmVzZXRGb3JtKGZvcm0pIHtcblx0XHRcdC8vIENsZWFyIHRoZSBmb3JtIGRhdGFcblx0XHRcdHZtLnBvc3REYXRhID0ge307XG5cblx0XHRcdC8vIFJlc2V0IGFuZ3VsYXIgc3RhdGVzXG5cdFx0XHRmb3JtLiRzZXRQcmlzdGluZSgpO1xuXHRcdFx0Zm9ybS4kc2V0VW50b3VjaGVkKCk7XG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
