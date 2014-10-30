var Nemo = require('nemo');

var assert = require('assert');
var config = require('./config');

    (new Nemo(config.ios)).setup().then(function (nemo) {
        nemo.driver.get(nemo.props.targetBaseUrl);
        nemo.driver.sleep(2000).then(function () {
            console.info("ios was successful!!");
            nemo.driver.quit().then(function () {
                process.exit();
            });
        });
    });
