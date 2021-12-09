//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Datebase
mongoose.connect("mongodb://localhost/rate_my_cakes");
require("./server/config/database");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(8080, function(){
    console.log("Listening on port: 8080");
})