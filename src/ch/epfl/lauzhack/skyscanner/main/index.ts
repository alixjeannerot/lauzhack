/**
 * !!! WARNING !!!
 * Please note that in order to use express-session objects, we need to deactivate type-checking.
 * Types of use objects are written in comments to avoid any confusion.
 */

import User from "../game/objects/User";
const express = require('express');
const session = require('express-session');
import Data from "../localStore/Data";
import Mission from "../game/objects/Mission";



const app = express();

app.use(session({secret: 'skyscanner2luxe', resave: false, saveUninitialized: false, cookie: { maxAge: 30*24*60*60000 }}));
app.use(express.static('build'));
app.use(express.static('static'));


app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');

    // If the user has already visited the page
    if(req.session.user) {
        res.render('index.ejs', {user: req.session.user});
    }

    // If the user has never visited the page
    else{
        req.session.user = User.defaultUser(); // type = User (User.ts)
        res.render('index.ejs', {user: req.session.user});
    }
    let data = new Data (Array(User.defaultUser(),User.defaultUser()),Mission.defaultMission());
    data.writeUser();
    data.readUser();

});

app.use(function(req, res){
});

app.listen(8080);
