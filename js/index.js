
const express = require('express')
const app = express()
const path = require("path")
const ejs = require('ejs')
var bodyParser = require('body-parser')
const repository = require('./inMemoryWorkshop');
//const repository = require("./mongoWorkshop");

repository.init().then(() => {

    app.use(bodyParser.urlencoded({ extended: false }))

    // set the view engine to ejs
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '..', '/ejs'));
    app.use(express.static(path.join(__dirname , '..', 'css')));
    
    
    app.get('/', function (req, res) {
        loadIndexPage(req, res)
    })
    
    app.get('/workshop', function (req, res) {
        console.log("get")
        res.render('workshop')
    })
    
    app.post('/workshop', function (req, res) {
        const name = req.body.name
        const description = req.body.description
        repository.addWorkshop(name, description).then(() => {
            loadIndexPage(req, res)
        })
        .catch(e =>res.send(e.message))
    })
    
    app.get('/workshop/:name', function (req, res) {
        const workshopName = req.params.name
        repository.getWorkshopByName(workshopName)
        .then(workshop => {
            res.render('edit_workshop', {
                workshop: workshop
            })
        })
        .catch(e =>ejs.send(e.message))
    })
    
    app.post('/remove-workshop', function (req, res) {
        const name = req.body.name
        repository.removeWorkshopByName(name).then(() => {
            loadIndexPage(req, res)
        })
        .catch(e =>res.send(e.message))
    })
    
    app.post('/update-workshop', function(req, res) {
        const name = req.body.name
        const description = req.body.description
        repository.updateWorkshop(name, description).then(() => {
            loadIndexPage(req, res)
        })
        .catch(e =>res.send(e.message))
    })
    
    app.listen(3000, function () {
      console.log('Workshop app listening on port 3000!')
    })
    
})

function loadIndexPage(req, res){
    return repository.getWorkshopList()
        .then(workshops => {
            res.render("index", {
                workshops: workshops
            })
        })
}

