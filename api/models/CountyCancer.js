const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define schema for Cancer stats
let CountyCancer = new Schema({
    county: {type: String},
    cases: {type: Number},
    cases_rate: {type: Number},
    deaths: {type: Number},
    death_rates: {type: Number}
});

//Export the models for each collection.
module.exports = [mongoose.model('CountyCancer', CountyCancer, 'cancer_by_county_2010'),
    mongoose.model('CountyCancer', CountyCancer, 'cancer_by_county_2011'),
    mongoose.model('CountyCancer', CountyCancer, 'cancer_by_county_2012'),
    mongoose.model('CountyCancer', CountyCancer, 'cancer_by_county_2013'),
    mongoose.model('CountyCancer', CountyCancer, 'cancer_by_county_2014')];