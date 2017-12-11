var express = require('express');
var defaults = require('../config/defaults.js');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var url = defaults['url'];

/* GET home page. */

/*

{
    name: "uribe"
    specialty_id: "Inmunology"
}

*/
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err) { return console.dir(err); }

        var db = client.db('foundation-test1');
        var p = db.collection('specialties');
        p.insertMany([
            //{a : 1}, {a : 2}, {a : 3}
        ], function(err, result) {
            console.log("Inserted 3 documents into the collection");
        });
        p.find({}).toArray(function(err, docs) {
            console.log("Found the following records");
            console.log(docs)
        });
        console.log("providers collection : " + p);
        console.log("database : " + db);
        client.close();
    });
  res.render('index', { title: 'Express' });
});

module.exports = router;
