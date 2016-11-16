(() => {

	'use strict';

	angular.module('app')
		.controller('CUsers', function(FApi)
		{

			let vm = this;

			vm.filterOptions = [
				{
					id: 1,
					name: 'All',
					value: 'all',
				},
				{
					id: 2,
					name: 'JS Fan',
					value: 'isJSFan',
				},
				{
					id: 3,
					name: 'Non JS Fan',
					value: 'noJSFan',
				}
			];

			// Set default selected filter
			vm.filterSelection = vm.filterOptions[0];



			// ------------------------------------------------------------
			// Name: getAllUsers
			// Abstract: Gets all users from database
			// ------------------------------------------------------------
			const getAllUsers = function()
			{
				// Get all users from API
				let userListPromise = FApi.getAllUsers();

				// Once returned...
				userListPromise.then(function(response)
				{
					// Target needed data
					vm.userList = response.data;
				});
			}


			// ------------------------------------------------------------
			// Name: deleteUser
			// Abstract: Deletes a user from the users list
			// ------------------------------------------------------------
			vm.deleteUser = function(user)
			{
				// Delete user from list on server
				let deleteUserPromise = FApi.deleteUser(user._id),
					userIndex 		  = null;

				// Once returned...
				deleteUserPromise.then(function(response)
				{
					// Save deleted user info
					let deletedUser = response.data;

					// Loop through user list
					vm.userList.forEach(function(user, index)
					{
						// Look for ID match
						if(user._id === deletedUser._id)
						{
							// Save index of ID match
							userIndex = index;
						}
					})

					// Was a match found?
					if(userIndex === null)
					{
						// No warn the user to refresh page
						alert('The user was successfully deleted from the database, but could not be found locally. Please refresh the page to update your user listing.');
					}
					else
					{
						// Yes, remove that index form userList array
						vm.userList.splice(userIndex, 1);
					}
				})
			}



			// ------------------------------------------------------------
			// Name: filterUsers
			// Abstract: Filters user list by JavaScript fan status
			// ------------------------------------------------------------
			vm.filterUsers = function(selection)
			{
				switch(selection.value)
				{
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

				if(selection !== null)
				{
					// Get all users from API
					let userListPromise = FApi.filterUsersByJSFan(selection);

					// Once returned...
					userListPromise.then(function(response)
					{
						// Target needed data
						vm.userList = response.data;
					});
				}
			}



			getAllUsers();
		})

})();
