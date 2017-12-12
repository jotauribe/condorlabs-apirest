var express = require('express');
var mongoose = require('mongoose');
var ProviderController = require('../controllers/providers.controller');
var defaults = require('../config/defaults.js')
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();
const url = defaults['url'];
const database = defaults['database'];

const collection = 'providers'

/* GET providers listing. */
router.get('/', function (req, res, next) {
    ProviderController.getAllProviders(req, res);
});

/* GET a provider identified by a given ID. */
router.get('/:id', function(req, res, next) {
    ProviderController.getAProvider(req, res);
});

/* CREATE a provider. */
router.post('/', function(req, res, next) {
    ProviderController.createAProvider(req, res);
});

//DELETE a providider identified by a given ID
router.delete('/:id', function(req, res, next) {
    ProviderController.deleteAProvider(req, res);
});

//UPDATE a provider identified by a given ID
router.put('/:id', function(req, res, next) {
    ProviderController.updateAProvider(req, res);
});

module.exports = router;