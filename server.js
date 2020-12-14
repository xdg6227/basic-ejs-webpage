const express = require('express');
const path = require('path');
const ejs = require('ejs');

const config = require('./config.json');
const port = config.Port;
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
  res.render('index.ejs', { title: 'Home' })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))