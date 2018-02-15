'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = Schema({
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('Artist', artistSchema);