const express = require('express');
const accounts = require('../data/accounts');
const router = express.Router();

const suscriptionService = require('../services/suscriptionService');

router.get('/', (req, res) => {

    const account = accounts.filter(account => account.id == process.env.SESSION)[0];
    const now = Math.floor(new Date().getTime() / 1000);
    const diff = account.expires - now;

    if (diff > 0) {
        res.json(account);

        return
    }

    if (account.auto_suscribe) {
        account.expires = suscriptionService.processMins(Number(account.suscription));
        res.json(account);

        return;
    }

    account.suscription = 0;
    account.expires = 0;
    account.auto_suscribe = false;

    res.json(account);

});

module.exports = router;
