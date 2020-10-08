
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '.', 'views'))
// app.use(express.static(path.join(__dirname, '.', 'views/style')))
app.use(express.static(path.join(__dirname, '/public')))
const workshop = require('./routes/workshop')
const home = require('./routes/home')

app.use('/', home)
app.use('/workshop', workshop)

app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
})
