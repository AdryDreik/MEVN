'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = Schema({
    number: String,
    name: String,
    duration: String,
    file: String,
    album: { type: Schema.ObjectId, ref: 'Album'}
});

module.exports = mongoose.model('Song', songSchema);