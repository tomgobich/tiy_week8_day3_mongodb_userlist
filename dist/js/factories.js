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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkZBcGkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImpzL2ZhY3Rvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuXHQndXNlIHN0cmljdCc7XG5cblx0YW5ndWxhci5tb2R1bGUoJ2FwcCcpLmZhY3RvcnkoJ0ZBcGknLCBmdW5jdGlvbiAoJGh0dHApIHtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGdldEFsbFVzZXJzXG5cdFx0Ly8gQWJzdHJhY3Q6IEdldHMgYWxsIHVzZXJzXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0dmFyIGdldEFsbFVzZXJzID0gZnVuY3Rpb24gZ2V0QWxsVXNlcnMoKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycydcblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHR9O1xuXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdFx0Ly8gTmFtZTogYWRkTmV3VXNlclxuXHRcdC8vIEFic3RyYWN0OiBBZGRzIGEgbmV3IHVzZXJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgYWRkTmV3VXNlciA9IGZ1bmN0aW9uIGFkZE5ld1VzZXIodXNlcikge1xuXHRcdFx0dXNlci51c2VySUQgPSBEYXRlLm5vdygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDk5OTkgLSAxMDAwKSArIDEwMDApO1xuXG5cdFx0XHQvLyBWYWxpZGF0ZSBqc0ZhbiBib29sZWFuXG5cdFx0XHRpZiAodXNlci5qc0ZhbiAhPT0gdHJ1ZSkge1xuXHRcdFx0XHR1c2VyLmpzRmFuID0gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwb3N0T2JqZWN0ID0ge1xuXHRcdFx0XHR1c2VyOiB1c2VyXG5cdFx0XHR9O1xuXG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGRhdGE6IHBvc3RPYmplY3QsXG5cdFx0XHRcdHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlcnMnXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHRcdC8vIE5hbWU6IGRlbGV0ZVVzZXJcblx0XHQvLyBBYnN0cmFjdDogRGVsZXRlcyBhIHVzZXJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0XHR2YXIgZGVsZXRlVXNlciA9IGZ1bmN0aW9uIGRlbGV0ZVVzZXIodXNlcklEKSB7XG5cdFx0XHR2YXIgcHJvbWlzZSA9ICRodHRwKHtcblx0XHRcdFx0bWV0aG9kOiAnREVMRVRFJyxcblx0XHRcdFx0dXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2Vycy8nICsgdXNlcklEXG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXRBbGxVc2VyczogZ2V0QWxsVXNlcnMsXG5cdFx0XHRhZGROZXdVc2VyOiBhZGROZXdVc2VyLFxuXHRcdFx0ZGVsZXRlVXNlcjogZGVsZXRlVXNlclxuXHRcdH07XG5cdH0pO1xufSkoKTsiXX0=
