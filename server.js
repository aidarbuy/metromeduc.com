/**
 * ExpressJS server app
 */

'use strict';

// Set your secret key: remember to change this to your live secret key in production
// See your keys here https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_vikl2WWRYd8OwQ4QYguvlYRT");

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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', '95.56.141.234');
    // res.setHeader('Access-Control-Allow-Origin', 'https://metromeduc.herokuapp.com');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

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
		console.log('serving');
	})
	.post('/charge', function(req, res) {
		// Get the credit card details submitted by the form
		var stripeToken = req.body.stripeToken;

		var charge = stripe.charges.create({
		  amount: 1000, // amount in cents, again
		  currency: "usd",
		  source: stripeToken,
		  description: "Example charge"
		}).then(function(charge) {
			console.log("The card has been successfully charged!");
		  	console.log(charge.status);
			res.send(charge);
		}, function(err) {
		  if (err && err.type === 'StripeCardError') {
		    console.log("The card has been declined");
		    console.log("Error: ", err);
		  }
		});
	});

// Server
// server.listen(process.env.PORT || 3000, 'localhost');
server.listen(process.env.PORT || 8000);
server.on('listening', function() {
	console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
