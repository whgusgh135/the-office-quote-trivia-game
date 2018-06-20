var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect(process.env.DATABASEURL);

mongoose.Promise = Promise;

module.exports.Quote = require("./quote");