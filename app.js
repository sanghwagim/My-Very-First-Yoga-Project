const mongoose = require('mongoose');
const express = require('express');
const app = express();
const user = require('./models/user');
const poseJson= require('./poses.json');

use.path



mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  "We have been connected"
});


app.get('/',  (req, res) =>  {
    console.log('hello world');
    res.send('');
  })




  app.get('/login',  (req, res) =>  {
    console.log('hello login');
    res.send('hello login');
  })

  app.post('/login',  (req, res) =>  {
    
    res.send('hello login');
  })




app.listen (1000, () => { 

    console.log('It is working');

    

})



