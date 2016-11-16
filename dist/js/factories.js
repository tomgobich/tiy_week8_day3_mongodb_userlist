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
		// Name: filterUsersByJSFan
		// Abstract: Filters users dependent on jsFan status
		// ------------------------------------------------------------
		var filterUsersByJSFan = function filterUsersByJSFan(isJSFan) {
			// Validate jsFan boolean
			if (!isJSFan) {
				isJSFan = false;
			}

			var promise = $http({
				method: 'POST',
				data: {
					jsFanFilter: isJSFan
				},
				url: 'http://localhost:3000/api/users/filter'
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
			filterUsersByJSFan: filterUsersByJSFan,
			deleteUser: deleteUser
		};
	});
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJqcy9mYWN0b3JpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXG5cdGFuZ3VsYXIubW9kdWxlKCdhcHAnKS5mYWN0b3J5KCdGQXBpJywgZnVuY3Rpb24gKCRodHRwKSB7XG5cblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHQvLyBOYW1lOiBnZXRBbGxVc2Vyc1xuXHRcdC8vIEFic3RyYWN0OiBHZXRzIGFsbCB1c2Vyc1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBnZXRBbGxVc2VycyA9IGZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGFkZE5ld1VzZXJcblx0XHQvLyBBYnN0cmFjdDogQWRkcyBhIG5ldyB1c2VyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGFkZE5ld1VzZXIgPSBmdW5jdGlvbiBhZGROZXdVc2VyKHVzZXIpIHtcblx0XHRcdC8vIFZhbGlkYXRlIGpzRmFuIGJvb2xlYW5cblx0XHRcdGlmICh1c2VyLmpzRmFuICE9PSB0cnVlKSB7XG5cdFx0XHRcdHVzZXIuanNGYW4gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHBvc3RPYmplY3QgPSB7XG5cdFx0XHRcdHVzZXI6IHVzZXJcblx0XHRcdH07XG5cblx0XHRcdHZhciBwcm9taXNlID0gJGh0dHAoe1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0ZGF0YTogcG9zdE9iamVjdCxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycydcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogZmlsdGVyVXNlcnNCeUpTRmFuXG5cdFx0Ly8gQWJzdHJhY3Q6IEZpbHRlcnMgdXNlcnMgZGVwZW5kZW50IG9uIGpzRmFuIHN0YXR1c1xuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdHZhciBmaWx0ZXJVc2Vyc0J5SlNGYW4gPSBmdW5jdGlvbiBmaWx0ZXJVc2Vyc0J5SlNGYW4oaXNKU0Zhbikge1xuXHRcdFx0Ly8gVmFsaWRhdGUganNGYW4gYm9vbGVhblxuXHRcdFx0aWYgKCFpc0pTRmFuKSB7XG5cdFx0XHRcdGlzSlNGYW4gPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIHByb21pc2UgPSAkaHR0cCh7XG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0anNGYW5GaWx0ZXI6IGlzSlNGYW5cblx0XHRcdFx0fSxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy9maWx0ZXInXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGRlbGV0ZVVzZXJcblx0XHQvLyBBYnN0cmFjdDogRGVsZXRlcyBhIHVzZXJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgZGVsZXRlVXNlciA9IGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcklEKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8nICsgdXNlcklEXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRBbGxVc2VyczogZ2V0QWxsVXNlcnMsXG5cdFx0XHRhZGROZXdVc2VyOiBhZGROZXdVc2VyLFxuXHRcdFx0ZmlsdGVyVXNlcnNCeUpTRmFuOiBmaWx0ZXJVc2Vyc0J5SlNGYW4sXG5cdFx0XHRkZWxldGVVc2VyOiBkZWxldGVVc2VyXG5cdFx0fTtcblx0fSk7XG59KSgpOyJdfQ==
