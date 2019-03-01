const mongoose = require('mongoose');

function getCounty(name, callBack){
//Connect to mongodb
//Username: McRae
//Password: WesternCS465!
mongoose.connect('mongodb://McRae:WesternCS495!@buster-shard-00-00-gwq3d.mongodb.net:27017,buster-shard-00-01-gwq3d.mongodb.net:27017,buster-shard-00-02-gwq3d.mongodb.net:27017/test?ssl=true&replicaSet=Buster-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true});

//On success print to screen
mongoose.connection.once('open',function(){
        console.log('Connection has been made');
}).on('error',function(error){
        console.log('Connection error', error);

});
        var db = client.db('Capstone');
        var collection = db.collection('2010_cancer_by_county');
  collection.find({county: 'wake'}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        console.log(result); // shows the county name
        // return result using callback parameter
        return callBack(result);
    });

}

