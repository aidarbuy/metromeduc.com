/**
 * ExpressJS server app
 */

'use strict';

var express = require('express'),
	http = require('http'),
	path = require('path'),
	app = express(),
	server = http.createServer(app);
	// compress = require('compress'),
	// mongoose = require('mongoose'),
	// bodyParser = require('body-parser'),
	// Doctor = require('./models/doctor'),
	// TopSidebar = require('./models/top-sidebar'),
	// Promise = require('bluebird'),
	// doctorsData = require('./doctors-data'),
	// topSidebarData = require('./top-sidebar-data'),
	// serverURL = "mongodb://dbuser:dbpassword@ds041238.mongolab.com:41238/clinic";
	// user = "TXdNtxmBpsNarNET9BWZRBPNA9h3vvWMaUv3pEszmJDfRNAHLz2gM7zjXvS7W4VD",
	// pwd = "tt4PwFDbvwfvrB6akRUy6HdPBPxSMTszytgExzjtrKZAeQCZaManwbc5eYpjAtRg",
	// serverURL = "mongodb://" +user+ ":" +pwd+ "@ds053607.mongolab.com:53607/metromed";

// mongodb database
// doctorsData.connectDB(serverURL)
	// .then(function() { console.log("connected to remote mongoDB") })
	// .then(doctorsData.resetTopSidebars)
	// .then(doctorsData.seedTopSidebars)
	// .then(doctorsData.resetDoctors)
	// .then(doctorsData.seedDoctors);

// express
// app
// 	.use(express.static(__dirname + '/public'))
// 	.use(bodyParser.json())
// 	// .use(compress())
// 	.set('views', __dirname)
// 	.set('view engine', 'jade');

app // routes
	.get('/api/doctors', function(req, res) {
		// Doctor.find({}, function(err, data) {
		// 	if (err) res.send(err);
		// 	console.log('finding doctors');
		// 	return res.json(data);
		// });
		// console.log(req);
		res.send('Hello World!');
	})
	.get('/api/doctors/:id', function(req, res) {
		Doctor.findOne({id: parseInt(req.params.id, 10)}, function (err, data) {
			if (err) res.send(err);
			return res.json(data);
		});
	})
	.get('*', function(req, res) {
		// res.render('index');
		console.log('serving index page');
	});

// Server
// server.listen(process.env.PORT || 3000, 'localhost');
server.listen(process.env.PORT || 8000);
server.on('listening', function() {
	console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
