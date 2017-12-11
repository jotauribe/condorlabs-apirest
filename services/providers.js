var express = require('express');
var defaults = require('../config/defaults.js')
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var url = defaults['url'];

module.exports.getAll = function () {
    var result;
    MongoClient.connect(url, function (err, client) {
        if(err) { return console.dir(err); }

        var db = client.db('foundation-test1');
        var p = db.collection('provider');
        p.find({}).toArray(function(err, docs) {
            result = docs;
        });
        client.close();
    });
    return result;
}