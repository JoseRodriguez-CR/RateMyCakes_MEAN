var fs = require("fs");
var path = require("path");

var models_path = path.join(__dirname, "./../models");

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf(".js") >= 0){
        require(models_path+"/"+file);
    }
});
//---------------------------------------------------------------
/*
const mongoose = require( 'mongoose' );

mongoose.connect("mongodb://localhost/rate_my_cakes");

mongoose.connection.on('error', err => {
    console.error(`Mongoose default connection error: ${ err }`);
    process.exit(0);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection disconnected');
});*/