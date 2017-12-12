'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProviderSchema = new Schema(
    {
        createdAt: Date,
        createdBy: Number,
        status: String,
        assignedTo: Number,
        staffStatus: String,
        providerType: String,
        employerId: Number,
        projectedStartDate: Date,
        email: String,
        middleName: String,
        lastName: String,
        firstName: String,
        updatedBy: Number,
        updatedAt: Date,
        specialty: {}
    });

module.exports = mongoose.model("Providers", ProviderSchema);