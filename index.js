const express = require('express')
const path = require("path")
const ejs = require('ejs')

const workshopRoutes = require("./backend/routes/workshop");

var bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './frontend', '/ejs'));
app.use(express.static(path.join(__dirname , './frontend', 'css')));

app.use('/', workshopRoutes);

app.use('/workshops', workshopRoutes);

app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
})
