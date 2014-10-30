var webdriver = require('selenium-webdriver');
var staticCaps = {
    "browserName" : "iPhone",
    "device" : "iphone",
    "CFBundleName" : "Safari",
    "simulator" : true,
    "language" : "en",
    "locale" : "en_US"
};
var driver = new webdriver.Builder().
    withCapabilities(staticCaps).
    usingServer('http://0.0.0.0:5555/wd/hub').
    build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(function() {
    return driver.getTitle().then(function(title) {
        return title === 'webdriver - Google Search';
    });
}, 1000);

driver.quit();
