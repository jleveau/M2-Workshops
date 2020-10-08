const express = require('express')
const app = express()
const path = require('path')
const api = require('./api')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', 'front/templates'));
app.use(express.static(path.join(__dirname , '..', 'front/style')));

api.start(app);

app.listen(3000, function () {
    console.log('Workshop app listening on port 3000!')
})