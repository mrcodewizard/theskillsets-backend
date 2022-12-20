require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./src/_middleware/error-handler');
const InitializeDb = require('./src/_helpers/db');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));
InitializeDb()
app.use('/api', require('./src/routes'));

// swagger docs route
app.use('/api-docs', require('./src/_helpers/swagger'));


app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));



//api url

// https://theskillsets-api.onrender.com/api/getallstudents
