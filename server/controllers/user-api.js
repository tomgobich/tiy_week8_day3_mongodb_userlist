const chalk = require('chalk');
const User  = require('../models/users.js');



exports.get = (function (req, res)
{
	let promise = User.find();
	promise.then(function(response)
	{
		res.json(response);
	});
});



exports.post = (function (req, res)
{
	// Get user passed in
	let newUser = req.body.user;

	User.create({
		name: newUser.name,
		age: newUser.age,
		jsFan: newUser.jsFan
	},
	function (err, user) {
		if (err)
		{
			return handleError(err);
		}
		else
		{
			let promise = User.find();
			promise.then(function(response)
			{
				res.json(response);
			});
		}
	});

	console.log(chalk.green( newUser.name + ' was added to users'));
});



exports.delete = (function(req,res)
{
	// Get the ID passed in
	let userID 		= req.params.userID;

	let promise = User.findByIdAndRemove({_id: userID});
	promise.then(function(response)
	{
		res.json(response);
	});
});