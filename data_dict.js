const http = require('http');
const fs = require('fs');
const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const dialog = require('dialog');
app.set('view engine', 'ejs');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.

//var url = 'mongodb://localhost:27017/capMatrix';
var url = 'mongodb://127.0.0.1:27017/data_dict';
var collection;



MongoClient.connect(url, function(err, db){
  // ... start the server
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //We are connected. :)
    console.log('Connection established to', url);
    collection = db.collection('data_dict');
    // Get the documents collection
  };  //collection('data_dict')};
  
})
	  
  app.listen(3000, function(){
    console.log('listening on 3000');
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function(req, res) {
     res.sendFile(__dirname + '/first_page.htm');
 
})

app.post('/dictionary', function(req, res) {
  console.log("Showing what's input :");
  console.log(req.body);
  
  var searchField = req.param('fieldName');
  collection.count({ fieldName : searchField }, function(err, numOfDoc){
	  
	   if (err) {console.log(err)}
       else { 		   
	             console.log("Total matches: "+numOfDoc)
				 if (numOfDoc == 0){
				     collection.insert(req.body, function(err, result){
                     if (err) {return console.log(err)};
                     console.log('saved to database');
                     dialog.warn('Insert Successful')
					 res.redirect('/');
					 })
                     } else {
						 dialog.warn('field Exists, try EDITING information')
						 res.redirect('/');
					 }
			}
     })
  
})

app.get('/search', function(req, res) {
   var searchField = req.param('fieldName');
   collection.count({ fieldName : searchField }, function(err, numOfDoc){
       if (err) {console.log(err);
       } else { 		   
	             console.log("Total matches: "+numOfDoc)
				 if (numOfDoc >= 1){
                     collection.find({ fieldName : searchField }).toArray(function(err, result){
                     if (err) {return console.log(err)};
                     res.render('single_update.ejs', {data_dict: result});
	                 console.log(result);
	                 //dialog.warn('Search Success')
					 })
				} else {
					dialog.warn('no such field exists')
					res.sendfile('public/search.htm');
					//res.redirect('/');
				}
	  
  }
  });
})

app.get('/update', function(req, res) {
   var searchField = req.param('fieldName');
   console.log('fieldName : ' + searchField);
   
   collection.findOneAndUpdate({ 
                                fieldName : searchField 
								},
								{$set: {
									length           : req.param('length'),
									description      : req.param('description'),
	                                hostScreenName   : req.param('hostScreenName'),
	                                fieldCode        : req.param('fieldCode'),
	                                possibleValues   : req.param('possibleValues'),
                                 	availableDWH     : req.param('availableDWH'),
	                                mliNumber        : req.param('mliNumber'),
	                                avlbleClipse     : req.param('avlbleClipse'),
	                                channelsUsing    : req.param('channelsUsing'),
	                                G2C_v            : req.param('G2C_v'),
	                                bpReference      : req.param('bpReference')
									    }
								},
								{
									sort : {_id : -1},
									upsert : true
								},function(err, result){
                                   if (err) {console.log(err)
									         return res.send(err);   
								   };
  
	                        	  dialog.warn('Update Success')
                            	  res.redirect('/');
	  });
})





app.get('/generic', function(req, res) {
   var searchField = req.param('fieldName');
   console.log(req.query);
   console.log(searchField);
  collection.find({ $or : [
                             {"fileName"          : new RegExp(searchField, 'i')},
							 {"fieldName"         : new RegExp(searchField, 'i')},
							 {"length"            : new RegExp(searchField, 'i')},
							 {"description"       : new RegExp(searchField, 'i')},
							 {"hostScreenName"    : new RegExp(searchField, 'i')},
							 {"fieldCode"         : new RegExp(searchField, 'i')},
							 {"possibleValues"    : new RegExp(searchField, 'i')},
							 {"availableDWH"      : new RegExp(searchField, 'i')},
							 {"mliNumber"         : new RegExp(searchField, 'i')},
							 {"avlbleClipse"      : new RegExp(searchField, 'i')},
							 {"channelsUsing"     : new RegExp(searchField, 'i')},
							 {"G2C_v"             : new RegExp(searchField, 'i')},
							 {"bpReference"       : new RegExp(searchField, 'i')}]}).toArray(function(err,result){
  	   if (err) {return console.log(err)}
          // renders index.ejs
       console.log('PRINTING RESULT BELOW:')
       //console.log(result);
       res.render('index.ejs', {data_dict: result})
   })
   //collection.createIndex({"$**":"text"});
   //collection.find({ $text : {$search : new RegExp(searchField, 'i')}}).toArray(function(err,result){
   //	   if (err) {return console.log(err)}
          // renders index.ejs
  //     console.log('PRINTING RESULT BELOW:')
       //console.log(result);
  //     res.render('index.ejs', {data_dict: result})
  // })
})
   //collection.createIndex({'fileName': "text", 'fieldName': "text", 'length': "text", 'description': "text", 'hostScreenName': "text",
//	'fieldCode': "text", 'possibleValues': "text", 'availableDWH': "text", 'mliNumber': "text", 'avlbleClipse': "text",
//	'channelsUsing': "text", 'G2C_v': "text",'bpReference': "text"});
   //collection.find(({
	 //  $or:{"fileName":{"$in":[searchField]},
	   //     "fieldName":{"$in":[searchField],
		//	"lenth":{"$in":[searchField],
//			"text":{"$in":[searchField],
	//		"description":{"$in":[searchField],
	//		"hostScreenName":{"$in":[searchField],
//			"fieldCode":{"$in":[searchField],
//			"possibleValues":{"$in":[searchField],
//			"availableDWH":{"$in":[searchField],
//			"mliNumber":{"$in":[searchField],
////			"avlbleClipse":{"$in":[searchField],
//			"channelsUsing":{"$in":[searchField],
//			"G2C_v":{"$in":[searchField],
//			"bpReference":{"$in":[searchField],}).toArray(function(err,result){
//			
 //  //collection.find(({ $text : {"$search" : new RegExp(searchField, 'i')}).toArray(function(err,result){
//							   if (err) {return console.log(err);}
 //                                   // renders index.ejs
  //                             else{
  //                                  console.log('PRINTING RESULT BELOW:')
  //                                   console.log(result);
  //                                  res.render('index.ejs', {data_dict: result})}
  //                               });
//});
//})

         



