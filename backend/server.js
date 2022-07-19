const express = require('express');
const cors = require('cors');

const app = express();

const accounts = require('./src/data/accounts');

const sessionController = require('./src/api/sessionController');
const suscriptionController = require('./src/api/suscriptionController');

// Suponemos que siempre habria sesion para la cuenta 1
process.env['SESSION'] = '1';

app.use(express.json());
app.use(cors());

app.use('/session', sessionController);
app.use('/suscription', suscriptionController);

app.listen(8080, () => console.log('Server is on'));
