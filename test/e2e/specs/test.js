module.exports = {
  'index': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .url(devServer + '/szm/')
      .assert.containsText('h1', 'Hello!')
      .url(devServer + '/form/')
      .waitForElementVisible('#app', 5000)
      .setValue('input', 'nightwatch')
      .waitForElementVisible('button', 1000)
      .click('button')
      .pause(1000)
      .end()
  }
}
