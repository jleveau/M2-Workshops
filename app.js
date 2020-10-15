
const express = require('express')
const app = express()
const path = require("path")
var bodyParser = require('body-parser')
var index = require('./controllers/index');
var createWorkshop = require('./controllers/create-workshop');
var updateWorkshop = require('./controllers/update-workshop');
var removeWorkshop = require('./controllers/remove-workshop');

app.use(bodyParser.urlencoded({extended: false}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public/css')));

app.use('/', index);
app.use('/workshop', createWorkshop);
app.use('/update-workshop/', updateWorkshop);
app.use('/remove-workshop', removeWorkshop);

app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
});

module.exports = app;