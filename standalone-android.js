var webdriver = require('selenium-webdriver'),
    SeleniumServer = require('selenium-webdriver/remote').SeleniumServer,
    assert = require('assert'),
    caps = {
        browserName: 'android',
        aut: 'io.selendroid.testapp:0.12.0'
    },
    driver = new webdriver.Builder().
        withCapabilities(caps).
        usingServer(getServer()).
        build();
function getServer() {
    var server = new SeleniumServer('/usr/local/bin/selendroid-standalone.jar', {
        port: 4444,
        stdio: 'inherit',
        args: ['-app', '/Users/medelman/src/android/selendroid-test-app-0.12.0.apk']
    });
    server.start();
    return server.address();
}
driver.get('and-activity://io.selendroid.testapp.HomeScreenActivity');
driver.getCurrentUrl().then(function (currentUrl) {
    assert.equal(currentUrl, 'and-activity://HomeScreenActivity')
});
driver.findElement(webdriver.By.id('my_text_field')).then(function (myTextField) {
    myTextField.sendKeys('Hello Selendroid');
    return myTextField.getText();
}).then(function (text) {
        assert.equal(text, 'Hello Selendroid');
    });

driver.quit();
