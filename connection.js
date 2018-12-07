const mongoose = require('mongoose');

//Connect to mongodb
mongoose.connect('mongodb://McRae:WesternCS495!@buster-shard-00-00-gwq3d.mongodb.net:27017,buster-shard-00-01-gwq3d.mongodb.net:27017,buster-shard-00-02-gwq3d.mongodb.net:27017/test?ssl=true&replicaSet=Buster-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});

mongoose.connection.once('open',function(){
	console.log('Connection has been made');
}).on('error',function(error){
	console.log('Connection error', error)

});
