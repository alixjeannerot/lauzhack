const express = require('express');
import {Request, Response} from "express"
const app = express();

app.use(express.static('build'));

app.get('/', function(re: Request, res: Response) {
    res.setHeader('Content-Type', 'text/html');
    res.render('index.ejs', {});
});

app.use(function(req: Request, res: Response){

});

app.listen(8080);