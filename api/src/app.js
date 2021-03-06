const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const corsc = require('cors');
const cors = require('./config/cors');

const routes = require('./routes');
const { errorHandler } = require('./config/errorHandler');

server.use(corsc());
server.use(cors);
server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.use(morgan('dev'));
// server.use(bodyParser.json({limit: '50mb'}));
// server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static('public'));
server.use(errorHandler);

//routes

server.use('/api', routes);

module.exports = server;
