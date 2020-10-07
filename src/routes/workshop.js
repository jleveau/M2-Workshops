const express = require('express')

const InMemoryWorkshop = require('../services/workshops')
const router = express.Router()
const ejs = require('ejs')

router.get('/', function (req, res) {
  console.log('get')
  res.render('workshop')
})

router.post('/', function (req, res) {
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
      res.render('workshop', workshop)
    })
    .catch(e => ejs.send(e.message))
})

router.post('/remove', function (req, res) {
  res.status(500).send('TODO')
})

router.post('/update', function (req, res) {
  res.status(500).send('TODO')
})

module.exports = router
