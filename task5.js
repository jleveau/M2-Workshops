/*
Task 6 : Suppression de workshop
Scénario :
  - Aucun workshop n'existe
  - On en créer un, on vérifie qu'il existe
  - On le supprime et on vérifie qu'il n'existe plus
*/
const { Builder, By, Key, until } = require('selenium-webdriver')
var assert = require('assert');
const { fail } = require('assert');

(async function AddWorkshop () {
  const driver = await new Builder().forBrowser('chrome').build()
  try {
    // Add and verification
    await driver.get('http://localhost:3000/')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)
    await driver.wait(until.urlIs('http://localhost:3000/workshop'), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.name('name')).sendKeys('NewWorkShop')
    await driver.findElement(By.name('description')).sendKeys('La description du workshop')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)
    await driver.wait(until.elementLocated(By.className('jumbotron')), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.className('mt-0')).getText().then(textValue => { assert.strictEqual('NewWorkShop', textValue) })
    await driver.findElement(By.className('media-body')).getText().then(textValue => { assert.strictEqual('La description du workshop', textValue.split('\n')[1]) })

    // Deletion
    await driver.sleep(1000)
    await driver.findElement(By.xpath('/html/body/ul/a[2]')).sendKeys(Key.RETURN)
    await driver.wait(until.urlIs('http://localhost:3000/remove-workshop'), 2000)
    await driver.sleep(1000)
    await driver.findElement(By.name('name')).sendKeys('NewWorkShop')
    await driver.findElement(By.className('btn')).sendKeys(Key.RETURN)

    // Verification
    await driver.wait(until.elementLocated(By.className('jumbotron')), 2000)
    await driver.sleep(1000)
    const isPresent = (await driver.findElements(By.className('mt-0'))).length > 0
    if (isPresent) {
      fail('Found the deleted workshop')
    }
  } finally {
    await driver.quit()
  }
})()
