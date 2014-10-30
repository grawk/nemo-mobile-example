'use strict';

var ios = {
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

var android = {
    nemoData: {
        targetBrowser: "android",
        targetServer: "localhost",
        serverProps: {
            port: 4445,
            stdio: 'inherit',
            args: ['-app', '/Users/medelman/src/android/selendroid-test-app-0.12.0.apk']
        },
        serverCaps: {
            browserName: 'android',
            aut: 'io.selendroid.testapp:0.12.0'
        },
        seleniumJar: "/usr/local/bin/selendroid-standalone.jar" //symbolic linked to selendroid-standalone-0.12.0-with-dependencies.jar
    }
};
module.exports.ios = ios;
module.exports.android = android;