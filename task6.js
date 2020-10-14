/*
Task 6 : Modification de workshop
Scénario :
  - Aucun workshop n'existe
  - On en créer un que l'on va ensuite modifier
  - On vérifie ensuite que la modification ai bien eu lieu
*/
const { Builder, By, Key, until } = require('selenium-webdriver')
var assert = require('assert');

(async function AddWorkshop () {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    // Add
    await driver.get('http://localhost:3000/')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)
    await driver.wait(until.urlIs('http://localhost:3000/workshop'), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.name('name')).sendKeys('NewWorkShop')
    await driver.findElement(By.name('description')).sendKeys('La description du workshop')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)
    await driver.wait(until.elementLocated(By.className('jumbotron')), 2000)

    // Modification
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/ul/a[1]')).sendKeys(Key.RETURN)
    await driver.wait(until.urlIs('http://localhost:3000/update-workshop'), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.name('oldname')).sendKeys('NewWorkShop')
    await driver.findElement(By.name('newname')).sendKeys('A new name')
    await driver.findElement(By.name('newdescription')).sendKeys('A new description')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)

    // Verification
    await driver.wait(until.elementLocated(By.className('jumbotron')), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.className('workshop_title')).getText().then(textValue => { assert.strictEqual('A new name', textValue) })
    await driver.findElement(By.className('workshop_description')).getText().then(textValue => { assert.strictEqual('A new description', textValue) })
  } finally {
    await driver.quit()
  }
})()
