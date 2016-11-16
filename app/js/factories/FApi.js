(() => {

	'use strict';

	angular.module('app')
		.factory('FApi', function($http)
		{



			// ------------------------------------------------------------
			// Name: getAllUsers
			// Abstract: Gets all users
			// ------------------------------------------------------------
			const getAllUsers = function()
			{
				let promise = $http({
					method: 'GET',
					url: `http://localhost:3000/api/users`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: addNewUser
			// Abstract: Adds a new user
			// ------------------------------------------------------------
			const addNewUser = function(user)
			{
				user.userID = Date.now() + Math.floor(Math.random() * (9999 - 1000) + 1000);

				// Validate jsFan boolean
				if(user.jsFan !== true)
				{
					user.jsFan = false;
				}

				let postObject = {
					user: user
				}

				let promise = $http({
					method: 'POST',
					data: postObject,
					url: `http://localhost:3000/api/users`,
				})

				return promise;
			}



			// ------------------------------------------------------------
			// Name: deleteUser
			// Abstract: Deletes a user
			// ------------------------------------------------------------
			const deleteUser = function(userID)
			{
				let promise = $http({
					method: 'DELETE',
					url: `http://localhost:3000/api/users/${userID}`,
				})

				return promise;
			}




			return {
				getAllUsers,
				addNewUser,
				deleteUser,
			}
		})
})();
