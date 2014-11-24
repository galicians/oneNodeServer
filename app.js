var express = require('express')
var appOne = express()
var http = require('http')
var path = require('path')
var Promise = require('promise')
var time = require('time')


// -------------------- Middleware serverOne --------------------//

appOne.use(function(req, res, next) {
  var now = new time.Date()
  console.log(now.toString() + ", on serverOne");
  next();
})





//---------------- Server One, on port 3000, -------------------------//


var serverOne = http.createServer(appOne)

appOne.set('views', __dirname + '/views');
appOne.set('view engine', 'html')
appOne.engine('html', require('ejs').renderFile)

serverOne.listen(3000, function() {
  console.log('Im serverOne listening at port 3000')
})



          //-------------- Routes server One ----------------//

appOne.get('/', function(req, res) {
  console.log("get request to / in server One")
  res.render('indexOne.html')
})

appOne.post('/voting_results', function(req, res) {
  console.log("post request to /voting_results/ in server one")
  var requestBody = req.body

})















