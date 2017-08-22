// Required Modules
var express = require('express');
var users = require('./users');
var posts =require('./posts');

// Create App
var app = express();

// Create Logger
var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
}

// Set Configs
app.set('view engine', 'pug');
app.use("./jquery", express.static(__dirname + './jquery'));
app.use(logger);

app.get('/users', function(req, res) {
 res.render('index', {
   users:users.all() 
	});

})

app.get('/user_name/:profile', function(req, res) {

		 if (req.params.profile==users.all()[0].name){
    res.render('profile', { user: users.all()[0]})	}
			if (req.params.profile==users.all()[1].name){
    res.render('profile', { user: users.all()[1]})	}
			if (req.params.profile==users.all()[2].name){
    res.render('profile', { user: users.all()[2]})	}
			if (req.params.profile==users.all()[3].name){
    res.render('profile', { user: users.all()[3]})	}

})

app.get('/user_details/:id', function(req, res) {
	res.render('id', {
		posts: posts.searchpost(req.params.id)
		});
});


app.get('/post/:id', function(req, res) {
	res.render('content', { 
		post: posts.searchpostByid(req.params.id)
		})

});


var listener = app.listen(1234, function() {
  console.log('Server started on ' + listener.address().port);
});


