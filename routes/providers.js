var express = require('express');
var defaults = require('../config/defaults.js')
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();
var url = defaults['url'];
var providerService = require('../services/providers');

var dbClient;

MongoClient.connect(url, function (err, client) {
    if(err){ return console.dir(err); }

    dbClient = client;
});

/* GET providers listing. */
router.get('/', function(req, res, next) {
    var db = dbClient.db('foundation-test1');
    var p = db.collection('provider');
    p.find({}).toArray(function(err, docs) {
        res.send(docs);
    });
    dbClient.close();
});

/* GET a provider identified by ID. */
router.get('/:id', function(req, res, next) {
    var db = dbClient.db('foundation-test1');
    var p = db.collection('provider');
    var id = req.params.id
    p.find({'_id': new ObjectID(id)}).toArray(function(err, docs) {
        res.send(docs);
    });
    dbClient.close();
});

module.exports = router;