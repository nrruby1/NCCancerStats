const express = require('express');
const app = express();
const countyCancerRoutes = express.Router();

let CountyCancer = require('../models/CountyCancer');

//The get CRUD code
countyCancerRoutes.route('/:index').get(function(req, res) {
    CountyCancer[req.params.index].find(function(err, countyCancers) {
        if(err) {
            console.log(err);
        } else {
            res.json(countyCancers);
        }
    });
});

//Exports the route to connect to the angular server.
module.exports = countyCancerRoutes;