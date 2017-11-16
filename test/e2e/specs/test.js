module.exports = {
  'index': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('.app-nav', 5000)
      .assert.elementPresent('.link-item')
      .assert.containsText('h1', 'test-commercial-1')
      .assert.elementCount('img', 4)
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
