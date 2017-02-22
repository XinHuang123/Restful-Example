//this server is used for public2/mean course example
var express = require('express');
var app = express();

//app.use(express.static(__dirname + '/public2/mean'));//host the static content in public directory
app.use(express.static(__dirname + '/public'));//host the static content in public directory

//bodyparser for update and create
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());//for parsing multipart/form-data


var examples=[
			{name:"Wow", seat: 23, date: new Date()},
			{name:"Biohazard 6", seat: 34, date: new Date(2015,9,4)},
			{name:"League Of Legends", seat: 45, date: new Date(2016,1,15)},			
		];
// /rest/ can distinguish this data from other type of data

app.get("/rest/example", function(req, res){
    res.send(examples);
});

app.get("/rest/example/:id", function(req, res){
    var index=req.params["id"];
    res.send(examples[index]);
});

app.post("/rest/example",function(req,res){
    var example=req.body;
    examples.push(example);
    res.send(examples);
});

app.put("/rest/example/:id", function(req,res){
    var example=req.body;
    var index=req.params["id"];
    examples[index].name=example.name;
    examples[index].seat=example.seat;
    examples[index].date=example.date;
    res.send(examples);
    
});

app.delete("/rest/example/:id", function(req, res){
    var index=req.params["id"];
    examples.splice(index,1);
    res.send(examples);
});

app.listen(3000);