var express = require('express');
var defaults = require('../config/defaults.js');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var url = defaults['url'];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CondorLabs Providers Web API Endpoint' });
});

module.exports = router;
