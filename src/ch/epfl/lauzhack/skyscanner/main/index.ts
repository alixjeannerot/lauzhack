const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({secret: 'skyscanner2luxe', resave: false, saveUninitialized: false, cookie: { maxAge: 60000 }}));
app.use(express.static('build'));
app.use(express.static('static'));

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    if(req.session.user) {
        res.render('index.ejs', {user: req.session.user});
    }
    else{
        req.session.user = "Xavier";
        res.render('index.ejs', {user: "nobody"});
    }
});

app.use(function(req, res){

});

app.listen(8080);