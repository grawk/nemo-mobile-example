var Nemo = require('nemo');

var assert = require('assert');
var config = require('./config');

(new Nemo(config.android)).setup().then(function (nemo) {
    var driver = nemo.driver;
    var webdriver = nemo.wd;
    driver.get('and-activity://io.selendroid.testapp.HomeScreenActivity');
    driver.getCurrentUrl().then(function (currentUrl) {
        assert.equal(currentUrl, 'and-activity://HomeScreenActivity')
    });
    driver.findElement(webdriver.By.id('my_text_field')).then(function (myTextField) {
        myTextField.sendKeys('Hello Selendroid');
        return myTextField.getText();
    }).then(function (text) {
            assert.equal(text, 'Hello Selendroid');
            return driver.quit();
        }).then(function () {
            console.log('android was successful!')
            process.exit();
        });
});
