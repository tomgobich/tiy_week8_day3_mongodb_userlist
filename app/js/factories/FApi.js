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
			// Name: filterUsersByJSFan
			// Abstract: Filters users dependent on jsFan status
			// ------------------------------------------------------------
			const filterUsersByJSFan = function(isJSFan)
			{
				// Validate jsFan boolean
				if(!isJSFan)
				{
					isJSFan = false;
				}

				let promise = $http({
					method: 'POST',
					data: {
						jsFanFilter: isJSFan
					},
					url: `http://localhost:3000/api/users/filter`,
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
				filterUsersByJSFan,
				deleteUser,
			}
		})
})();
