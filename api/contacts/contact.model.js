const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactScheme = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    sandbox: String
});

module.exports = mongoose.model('Contact', contactScheme);