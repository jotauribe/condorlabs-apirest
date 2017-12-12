'use strict';


var mongoose = require('mongoose'),
    Provider = require('../models/provider.model'),
    Specialty = require('../models/specialties.model'),
    defaults = require('../config/defaults'),
    connectionURL = defaults['url'];

mongoose.Promise = global.Promise;
mongoose.connect(connectionURL);

exports.getAllProviders = function (request, response) {
    Provider.find({}, function(error, providers) {
        if (error) response.send(error);
        //else
        response.send(providers);
    });
}

exports.getAProvider = function (request, response) {
    const id = request.params.id;
    Provider
        .findById(id)
        .exec(function(error, provider) {
            if (error) response.send(error);
            //else
            response.send(provider);
    });
}

exports.deleteAProvider = function (request, response) {
    const id = request.params.id;
    Provider.remove({_id: id}, function(error, provider) {
        if (error) response.send(error);
        //else
        response.send(provider);
    });
}

exports.createAProvider = function (request, response) {
    var specialtyName = request.body.specialty;
    Specialty.findOne({name: specialtyName},
         function(error, specialty) {
             if (error) response.send(error);
             //else
             var newProvider = new Provider(request.body);
             newProvider.specialty = specialty;
             newProvider.save(function(error, provider) {
                 if (error) response.send(error);
                 //else
                 response.send(provider);
             })
         });
}

exports.updateAProvider = function (request, response) {
    const id = request.params.id;
    Specialty.findOneAndUpdate({_id: id}, request.body, {new: true},
        function(error, updatedProvider) {
            if (error) response.send(error);
            //else
            response.send(updatedProvider);
        });
}