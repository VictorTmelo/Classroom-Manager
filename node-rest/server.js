var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
// mongoose = require('mongoose'),
// Message = require('./api/models/msgModel'),
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/msgdb');
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Classroom Manager RESTful API server started on port: ' + port);