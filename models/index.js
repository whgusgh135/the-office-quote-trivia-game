var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/office-quote-api");

mongoose.Promise = Promise;

module.exports.Quote = require("./quote");