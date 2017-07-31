//Main starting point of application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const port = process.env.PORT || 3000;
const server = http.createServer(app); //Create an HTTP server that recives requests, that forwards it to our application

//App Setup

//Middleware
app.use(morgan('combined'));//Logging framework, logging incomming requests used for debugging etc
app.use(bodyParser.json({type: '*/*'}));

app.get('/', (req, res) => {
    res.send('Hello World');
});
//Server Setup
server.listen(port, () => {
    console.log(`Server listening on: ${port}`);
});