const ejs = require('ejs')
const partials = require('express-partials')
const express = require('express')
const bodyParser = require('body-parser')
var app = express();

var routes = require('./routes/index.js');

app.use(partials());
app.engine('html', require('ejs').renderFile); //renders .ejs as html

app.set('views', './views');
app.use(express.static('./public'));

app.use(express.bodyParser()); //deals with incoming request objects
app.use(express.methodOverride());

/**** Turn on some debugging tools ****/
app.use(express.logger()); // sends messages into the terminal
app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); //dumpExceptions - directs exceptions to stderr - showStack - generate HTML for an exception å



app.get('/', routes.main);

var port = 4040;
app.listen(port, function() {
  console.log("Listening on " + port);
});
