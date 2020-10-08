const db = require('./db');

/**
 * TODO
 * @param {Express} app
 */
function start(app) {
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

  app.post('/workshop', function(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    db.addWorkshop(name, description).then(() => {
      db.getWorkshopList()
          .then((workshops) => {
            res.render('index', {
              workshops: workshops,
            });
          });
    })
        .catch((e) =>res.send(e.message));
  });

  app.get('/workshop/:name', function(req, res) {
    const workshopName = req.params.name;
    db.getWorkshopByName(workshopName)
        .then((workshop) => {
          res.render('ejs/workshop', workshop);
        })
        .catch((e) =>ejs.send(e.message));
  });

  app.post('/remove-workshop', function(req, res) {
    res.status(500).send('TODO');
  });

  app.post('/update-workshop', function(req, res) {
    res.status(500).send('TODO');
  });
}

module.exports = {
  start,
};
