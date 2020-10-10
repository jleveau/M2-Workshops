const express = require("express");

const workshopController = require('../controllers/workshop');


const router = express.Router();

router.get('/', workshopController.printWorkshops);
router.get('/workshop', workshopController.getCreateWorkshopView);
router.post('/workshop', workshopController.createNewWorkshop);

router.get('/workshop/:name', function (req, res) {
    const workshopName = req.params.name
    InMemoryWorkshop.getWorkshopByName(workshopName)
    .then(workshop => {
        res.render('ejs/workshop', workshop)
    })
    .catch(e =>ejs.send(e.message))
})

router.post('/remove-workshop/:name', workshopController.removeWorkshop);
router.post('/update-workshop/:name', workshopController.updateWorkshop);
router.get('/update-workshop/:name', workshopController.getUpdateWorkshopView);

module.exports = router;
