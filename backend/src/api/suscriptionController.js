const express = require('express');
const accounts = require('../data/accounts');
const router = express.Router();

const validate = require('express-jsonschema').validate;

const suscriptionSchema = require('../models/suscriptionSchema');

const suscriptionService = require('../services/suscriptionService');

const mins = [1, 5, 10];

router.post('/:id', validate({ body: suscriptionSchema }), (req, res) => {

    const _accounts = accounts.filter(account => account.id == req.params.id);

    if (_accounts.length === 0) {
        res.json({ error: 'Account not found' });
        res.status(404);

        return;
    }

    if (mins.filter(value => value === Number(req.body.mins)).length === 0) {
        res.json({ error: 'Suscription time allowed: [1 minute, 5 minutes, 10 minutes]' });
        res.status(400);

        return;
    }

    _accounts[0].suscription = req.body.mins;
    _accounts[0].expires = suscriptionService.processMins(Number(req.body.mins));
    _accounts[0].auto_suscribe = req.body.auto_suscribe;

    res.json(_accounts[0]);

});

module.exports = router;
