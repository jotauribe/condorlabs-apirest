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
  res.render('index', { title: 'Express' });
});

module.exports = router;
