const express = require('express');
import {Request, Response} from "express"
const app = express();

app.get('/', function(re: Request, res: Response) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil');
});

app.listen(8080);