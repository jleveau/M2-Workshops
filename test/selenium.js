describe('End to End Test Suite', done => {
  before(done => {
   driver.get('http://localhost:3000').then(function(res) {
     driver
       .findElement(By.css('body > div > h1'))
       .then(() => {
         done();
       });
     });
  });
   it('can create a workshop',()=>{
  
   driver.findElement(By.css("body > a"))
   .click()
   .then(()=>{
   driver.findElement(By.css("#name")).sendKeys("nouvel atelier");
   })
   .then(()=>{
  
  driver.findElement(By.css("#description")).sendKeys("description");
   })
   .then(()=>{
     driver.findElement(By.css("body > form > button")).click();
   })
   .then(()=>{
     driver.wait(until.urlIs("localhost://3000"));
   });
  });
  after(async () => driver.quit());
  });



/*const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = new Builder()
    .forBrowser('edge')
    .usingServer('http://localhost:3000/')
    .build();
  try {
    //await driver.get('http://localhost:3000/');
      it('cliquer sur le bouton "Create new workshop', () => {
         driver.findElement(By.css('body > a')).click().then(() => {
             driver.wait(until.urlIs('/workshop'), 5000);
          })
      });*/
      /*

      it('Remplir les champs et Sauvegarder', () => {
        await driver.findElement(By.css('body > a')).click().then(() => {
            await driver.wait(until.urlIs('/workshop'), 5000);
            await driver.findElement(By.id('name')).sendKeys('new workshop');
            await driver.findElement(By.id('description')).sendKeys('amazing description');
            await driver.findElement(By.css('body > form > button')).click().then(() => {
                await driver.wait(until.urlIs('/'), 5000);
                //Il faut checker si dans la liste il y a bien "new workshop" et "amazing description"
            })
          })
      });

      it('Sauvegarder un atelier sans remplir les champs #1', () => {
        await driver.findElement(By.css('body > a')).click().then(() => {
            await driver.wait(until.urlIs('/workshop'), 5000);
            await driver.findElement(By.id('name')).sendKeys('new workshop');
            await driver.findElement(By.css('body > form > button')).click().then(() => {
                await driver.wait(until.urlIs('/workshop'), 5000);
            })
          })
      });

      it('Sauvegarder un atelier sans remplir les champs #2', () => {
        await driver.findElement(By.css('body > a')).click().then(() => {
            await driver.wait(until.urlIs('/workshop'), 5000);
            await driver.findElement(By.id('description')).sendKeys('amazing description');
            await driver.findElement(By.css('body > form > button')).click().then(() => {
                await driver.wait(until.urlIs('/workshop'), 5000);
            })
          })
      });

      it('Sauvegarder un atelier sans remplir les champs #3', () => {
        await driver.findElement(By.css('body > a')).click().then(() => {
            await driver.wait(until.urlIs('/workshop'), 5000);
            await driver.findElement(By.css('body > form > button')).click().then(() => {
                await driver.wait(until.urlIs('/workshop'), 5000);
            })
          })
      });

      it('Annuler la creation atelier', () => {
        await driver.findElement(By.css('body > a')).click().then(() => {
            await driver.wait(until.urlIs('/workshop'), 5000);
            await driver.findElement(By.css('body > form > a')).click().then(() => {
                await driver.wait(until.urlIs('/'), 5000);
            })
          })
      });*/

    /*} finally {
        await driver.quit();
    }
  })();*/
 