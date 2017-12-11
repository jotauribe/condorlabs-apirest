var express = require('express');
var defaults = require('../config/defaults.js')
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();
var url = defaults['url'];

const collection = 'provider'

/* GET providers listing. */
router.get('/', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err){ return console.dir(err); }
        var db = client.db('foundation-test1');
        var p = db.collection(collection);
        var schema=p.findOne();
        console.log(typeof schema[0]) ;
        for (var key in schema) {
            console.log(key, typeof schema[key])
        }

        p.find({}).toArray(function(err, docs) {
            res.send(docs);
        });
        client.close();
    });
});

/* GET a provider identified by ID. */
router.get('/:id', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err){ return console.dir(err); }
        var db = client.db('foundation-test1');
        var p = db.collection(collection);
        var id = req.params.id
        p.find({'_id': new ObjectID(id)}).toArray(function(err, docs) {
            res.send(docs);
        });
        client.close();
    });
});

/* GET a provider identified by ID. */
router.post('/', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err){ return console.dir(err); }
        var db = client.db('foundation-test1');
        var p = db.collection(collection);
        var provider = req.body;
        p.insert(provider, function(err, docs) {
            res.send(docs);
        });
        client.close();
    });
});

router.delete('/:id', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err){ return console.dir(err); }
        var db = client.db('foundation-test1');
        var p = db.collection(collection);
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        p.remove(details, function(err, item) {
            res.send(item);
        });
        client.close();
    });
});

router.put('/:id', function(req, res, next) {
    MongoClient.connect(url, function (err, client) {
        if(err){ return console.dir(err); }
        var db = client.db('foundation-test1');
        var p = db.collection(collection);
        const id = req.params.id;
        const provider = req.body;
        const details = { '_id': new ObjectID(id) };
        p.update(details, provider, function(err, item) {
            res.send(item);
        });
        client.close();
    });
});

module.exports = router;