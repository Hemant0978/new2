var express = require('express');

var app = express();
app.set('view engine', 'ejs');

//app.set('view engine', 'html');
app.get('/', function(req, res){
  res.render('index');
});
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Server is running at port: "+ port);
})
