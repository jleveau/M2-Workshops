const express = require('express')

const InMemoryWorkshop = require('../services/workshopService')
const router = express.Router()

router.get('/', function (req, res) {
  InMemoryWorkshop.getWorkshopList()
    .then(workshops => {
      res.render('app', {
        workshops: workshops
      })
    })
})

module.exports = router
