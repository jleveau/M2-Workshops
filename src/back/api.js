const db = require('./db');

/**
 * TODO
 * @param {Express} app
 */
function start(app) {
  // ----------------
  // "HTML" ENDPOINTS
  // ----------------

  app.get('/', function(req, res) {
    db.getWorkshopList()
        .then((workshops) => {
          res.render('index', {
            workshops: workshops,
          });
        });
  });

  app.get('/workshop', function(req, res) {
    console.log('get');
    res.render('workshop');
  });

  app.get('/workshop/:name', function(req, res) {
    const workshopName = req.params.name;
    db.getWorkshopByName(workshopName)
        .then((workshop) => {
          res.render('ejs/workshop', workshop);
        })
        .catch((e) => res.send(e.message));
  });

  // ----------------
  // API ENDPOINTS
  // ----------------

  app.post('/api/create-workshop', function(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    db.addWorkshop(name, description)
        .then(() => res.redirect('/'))
        .catch((e) => res.send(e.message));
  });

  app.post('/api/remove-workshop', function(req, res) {
    res.status(500).send('TODO');
  });

  app.post('/api/update-workshop', function(req, res) {
    const workshopOldName = req.body.old_name;
    const workshopName = req.body.name;
    const workshopDescription = req.body.description;
    db.updateWorkshop(workshopOldName, workshopName, workshopDescription)
        .then(() => res.redirect('/'))
        .catch((e) => res.send(e.message));
  });
}

module.exports = {
  start,
};
