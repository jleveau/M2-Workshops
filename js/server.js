
const express = require('express')
const app = express()
const InMemoryWorkshop = require("./inMemoryWorkshop")
const path = require("path")
const ejs = require('ejs')
var bodyParser = require('body-parser')
const inMemoryWorkshop = require('./inMemoryWorkshop')

//Middleware
app.use(bodyParser.urlencoded({ extended: false }))

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', '/views/pages'));
app.use(express.static(path.join(__dirname , '..', 'css')));

// Route
app.get('/', function (req, res) {
    InMemoryWorkshop.getWorkshopList()
    .then(workshops => {
        res.render("index", {
            workshops: workshops
        })
    })
})

app.get('/workshop', function (req, res) {
    console.log("get")
    res.render('create-workshop')
})

app.post('/workshop', function (req, res) {
    const name = req.body.name
    const description = req.body.description
    InMemoryWorkshop.addWorkshop(name, description).then(() => {
        InMemoryWorkshop.getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
    })
    .catch(e =>res.send(e.message))
})

app.get('/workshop/:name', function (req, res) {
    console.log("coucou")
    const workshopName = req.params.name
    InMemoryWorkshop.getWorkshopByName(workshopName)
    .then(workshop => {
        res.render('create-workshop', workshop)
    })
    .catch(e =>ejs.send(e.message))
})

app.get('/remove-workshop', function(req, res) {
    res.render('remove-workshop',{workshop: 'ID'})
})

app.post('/remove-workshop', function(request, response) {
    if (request.body.message === undefined || request.body.message === '' ){
        InMemoryWorkshop.getWorkshopList()
        .then(workshops => {
            response.render("index", {
                workshops: workshops,
                message: 'Aucun atelier sélectionné !'
            })
        })
    }else{
        InMemoryWorkshop.removeWorkshopByName(request.body.message)
        .then(workshops => {
            response.render('index', {
                workshops : workshops,
                message: request.body.message+' deleted success !'
            })
        })
    }

})

app.listen(3000, function () {
  console.log('Workshop app listening on port 3000!')
})