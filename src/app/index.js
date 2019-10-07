
const express = require('express');

const app = express();
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const InMemoryWorkshop = require('./inMemoryWorkshop');

app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', '/view', '/ejs'));
app.use(express.static(path.join(__dirname, '..', '/view', '/css')));


app.get('/', (req, res) => {
  InMemoryWorkshop.getWorkshopList()
    .then((workshops) => {
      res.render('index', {
        workshops,
      });
    });
});

app.get('/workshop', (req, res) => {
  console.log('get');
  res.render('workshop', {
    workshop: null,
  });
});

app.post('/workshop', (req, res) => {
  const { name } = req.body;
  const { description } = req.body;
  InMemoryWorkshop.addWorkshop(name, description).then(() => {
    InMemoryWorkshop.getWorkshopList()
      .then((workshops) => {
        res.render('index', {
          workshops,
        });
      });
  })
    .catch((e) => res.send(e.message));
});

app.get('/workshop/:name', (req, res) => {
  const workshopName = req.params.name;
  InMemoryWorkshop.getWorkshopByName(workshopName)
    .then((workshop) => {
      res.render('workshop', {
        workshop,
      });
    })
    .catch((e) => ejs.send(e.message));
});

app.post('/remove-workshop', (req, res) => {
  res.status(500).send('TODO');
});

app.post('/update-workshop', (req, res) => {
  const { name } = req.body;
  const { description } = req.body;
  InMemoryWorkshop.updateWorkshop(name, description).then(() => {
    InMemoryWorkshop.getWorkshopList()
      .then((workshops) => {
        res.render('index', {
          workshops,
        });
      });
  });
});

app.listen(3000, () => {
  console.log('Workshop app listening on port 3000!');
});
