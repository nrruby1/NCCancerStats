var mongo = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://McRae:Hotpepper1!@buster-shard-00-00-gwq3d.mongodb.net:27017,buster-shard-00-01-gwq3d.mongodb.net:27017,buster-shard-00-02-gwq3d.mongodb.net:27017/test?ssl=true&replicaSet=Buster-shard-0&authSource=admin&retryWrites=tru';

function findCounty(countyName){
    mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var dbName = db.db("Capstone");
		//var cursor = db.collection('2010_caner_by_county').find("county": countyName);
		dbName.collection("2010_caner_by_county").findOne({'county': countyName}, function(err, result){
			if(err) throw err;
            console.log(result);
            //res.send(JSON.stringify(result));
			return result.cases;
        });
	});
}