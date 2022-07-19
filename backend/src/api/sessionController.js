const express = require('express');
const accounts = require('../data/accounts');
const router = express.Router();

router.get('/', (req, res) => {

    const account = accounts.filter(account => account.id == process.env.SESSION)[0];

    res.json(account);

});

module.exports = router;
