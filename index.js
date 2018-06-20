var express = require("express");
var app = express();
var bodyParser = require("body-parser");
/*var seedDB = require("./seeds");*/

var quoteRoutes = require("./routes/quotes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
/*seedDB();*/

app.get("/", function(req, res){
    res.sendFile("index.html");
});

app.use("/api/quotes", quoteRoutes);

app.listen(process.env.PORT, process.env.IP);