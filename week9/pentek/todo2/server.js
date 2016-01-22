'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("./mysql.js");

var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());



app.post('/todos', function(req, res) {
  //console.log('most kapta meg a post');
  mysql.add(req.body, function(item) {
    //console.log('most tert vissza a: ' +  item);
    return res.status(201).json(item)
  });
});

app.get('/todos', function(req, res) {
    //console.log('most kapta meg');
  mysql.getAll( function(items) {
    //console.log(items);
  return res.status(200).json(items)
   });
});

app.get("/todos/:id", function(req, res) {
  mysql.get(req.params.id, function (item) {
    return res.status(200).json(item)
  });
});


app.listen(3000, function() {
  console.log('mukszik');
});