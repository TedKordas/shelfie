const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    massive = require('massive');
    ctrl = require('./controller.js')

require('dotenv').config();
const app = express ();

app.use(bodyParser.json());
app.use(cors());

massive( process.env.CONNECTION_STRING ).then(db => {
    app.set('db', db);

    db.init.seed_file().then(res => console.log('seed file success!'))
    .catch(err => console.log(err, 'seed file failure'))
}).catch(err => console.log(err, 'db connection failure'))

app.get('/api/getAllBins', ctrl.getAllBins );

app.get('/api/getAllShelves', ctrl.getAllShelves );

app.get('/api/getShelfA', ctrl.getShelfA );

app.get('/api/getShelfB', ctrl.getShelfB );

app.get('/api/getShelfC', ctrl.getShelfC );

app.get('/api/getShelfD', ctrl.getShelfD );

const port = process.env.PORT || 3005
app.listen(port, () => console.log(`Listening on ${port}`));