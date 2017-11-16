var express = require('express');
var router = express.Router();
//var request = require('request');
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;
var dbUrl = 'mongodb://localhost/gifts';

var collection = 

MongoClient.connect(dbUrl, function(err,db){
	if(err){console.log('unable to connect to the MongoDB server. Error:', err);}
	else{
		console.log('Connection established to', dbUrl);
	}	
});


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/gift', function(req, res){
  console.log("In Gift Post");
  console.log(req.body);
  gift.push(req.body);
  res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.get('/gift', function(req,res){
	console.log("in gift route");
	res.send(gift);
});

router.delete('/comments/:comment', function(req, res) {
  console.log("in Delete");
  req.comment.remove();
  res.sendStatus(200);
});

var gift = [];


module.exports = router;
