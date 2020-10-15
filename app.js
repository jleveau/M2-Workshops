
const express = require('express')
const app = express()
const path = require("path")
var bodyParser = require('body-parser')
const index = require("./controllers/index")
const workshopCreation = require("./controllers/workshopCreation")
const workshopUpdate = require("./controllers/workshopUpdate")
const workshopDelete = require("./controllers/workshopDelete")


app.use(bodyParser.urlencoded({ extended: false }))
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.use(express.static(path.join(__dirname , '/public/css')));

app.use('/', index); 
app.use('/workshop', workshopCreation); 
app.use('/workshop-update', workshopUpdate);
app.use('/remove-workshop', workshopDelete);

app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
})
