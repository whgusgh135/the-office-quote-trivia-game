var mongoose = require("mongoose");

var quoteSchema = new mongoose.Schema({
    name: String,
    quote: String
})

var Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;