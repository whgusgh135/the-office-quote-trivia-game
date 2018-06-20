var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res){
    db.Quote.find()
    .then(function(quotes){
        res.json(quotes);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.post("/", function(req, res){
    db.Quote.create(req.body)
    .then(function(newQuote){
        res.status(201).json(newQuote);
    })
    .catch(function(err){
        res.send(err);
    });
});

router.get("/:quoteId", function(req, res){
    db.Quote.findById(req.params.quoteId)
    .then(function(foundQuote){
        res.json(foundQuote);
    })
    .catch(function(err){
        res.send(err);
    })
})

module.exports = router;