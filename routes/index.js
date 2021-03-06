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

router.param('gift', function(req, res, next, id) {
  var query = gift.findById(id);
  query.exec(function (err, comment){
    if (err) { return next(err); }
    if (!gift) { return next(new Error("can't find gift")); }
    req.gift = gift;
    return next();
  });
});

router.get('/gift', function(req,res){
	console.log("in gift route");
	res.send(gift);
});

router.delete('/gifts/:gift', function(req, res) {
  console.log("in Delete");
  req.comment.remove();
  res.sendStatus(200);
});

var gift = [];


module.exports = router;
