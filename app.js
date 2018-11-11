const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

//express app
const app = express();

//log to the console
app.use(logger('dev'));

//parse requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
	message: 'initial calling success'
}));

module.exports = app;
