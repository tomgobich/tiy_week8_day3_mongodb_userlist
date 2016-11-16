const express 		= require('express');
const mongoose 		= require('mongoose');
const cors 			= require('cors');
const bodyParser 	= require('body-parser');

const app 			= express();

const port = process.env.PORT || 3000;



app.use(cors());

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.Promise = global.Promise;

// connect to Mongo when the app initializes
mongoose.connect('mongodb://tomgobich:C7Q5XxdbX9Z1c4eC@ds011024.mlab.com:11024/nodetastic-app');



const userApi = require('./controllers/user-api.js');

app.get('/api/users', userApi.get);
app.post('/api/users', userApi.post);
app.delete('/api/users/:userID', userApi.delete);



app.listen(port, function () {
	console.log('Server running on port ' + port);
});
