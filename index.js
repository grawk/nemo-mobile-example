var Nemo = require('nemo');

var config = {
    nemoData: {
        targetBrowser: "iphone",
        targetServer: "localhost",
        serverProps: {
            "args": ["-aut", "/Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/SDKs/iPhoneSimulator7.1.sdk/Applications/MobileSafari.app"],
            "port": 4444,
            "stdio": "inherit"
        },
        serverCaps: {"simulator": true},
        seleniumJar: "/usr/local/bin/ios-server-standalone.jar", //symbolic linked to ios-driver-0.6.6-SNAPSHOT.jar

        targetBaseUrl: "https://www.paypal.com"
    }
};
//THE ABOVE OR BELOW WILL WORK TO SET nemoData. IN A CONTEST, SETTING VIA Nemo() WILL WIN

(new Nemo(config)).setup().then(function(nemo) {
    nemo.driver.get(nemo.props.targetBaseUrl);

    nemo.driver.sleep(5000).
        then(function() {
            console.info("Nemo was successful!!");
            nemo.driver.quit().then(function() {
                process.exit();
            });

        });
});