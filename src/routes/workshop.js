const express = require('express')

const InMemoryWorkshop = require('../services/workshopService')
const router = express.Router()
const ejs = require('ejs')

router.get('/', function (req, res) {
  console.log('get')
  res.render('workshop')
})

router.post('/add', function (req, res) {
  const name = req.body.name
  const description = req.body.description
  InMemoryWorkshop.addWorkshop(name, description).then(() => {
    res.redirect('/')
  })
    .catch(e => res.send(e.message))
})

router.get('/:name', function (req, res) {
  const workshopName = req.params.name
  InMemoryWorkshop.getWorkshopByName(workshopName)
    .then(workshop => {
      if (workshop) {
        res.render('workshop-edit', {
          workshop: workshop
        })
      } else {
        res.redirect('/')
      }
    })
    .catch(e => ejs.send(e.message))
})

router.post('/remove', function (req, res) {
  const name = req.body.name
  InMemoryWorkshop.removeWorkshopByName(name)
    .then(() => {
      res.redirect('/')
    })
    .catch(e => res.send(e.message))
})

router.post('/update', function (req, res) {
  const previousName = req.body.previous_name
  const name = req.body.name
  const description = req.body.description
  InMemoryWorkshop.updateWorkshop(previousName, name, description)
    .then(() => {
      res.redirect('/')
    })
    .catch(e => res.send(e.message))
})

module.exports = router
