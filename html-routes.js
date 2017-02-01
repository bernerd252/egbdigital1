
// =============================================================
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	// Each of the below routes just handles the HTML page that the user gets sent to.
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});

app.get('/index.html', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});


app.get('/css/style.css', function(req, res){
		res.sendFile(path.join(__dirname + '/css/style.css'));
	});

app.get('/js/index.js', function(req, res){
		res.sendFile(path.join(__dirname + '/js/index.js'));
	});

}





