# nemo-mobile-example

How to use nemo with ios-driver and selendroid

## ios-driver

1. You will need to have an appropriate version of XCode, and version of the ios-driver JAR. As of this writing, I'm using:
  * XCode 5.1.1 with iPhoneSimulator7.1.sdk
  * ios-driver-0.6.6-SNAPSHOT.jar
  * OS 10.8.5

2. To run the example in this repo, you'll need to change permissions on the MobileSafari.app used in the simulator. See here: http://ios-driver.github.io/ios-driver/?page=safari

3. Clone and install this repo: `$ git clone https://github.com/grawk/nemo-mobile-example.git; cd nemo-mobile-example; npm install;`

4. Look in index.js, and note the two hard-coded paths (for the ios-driver jar and the MobileSafari.app folder). Make sure these accurately reflect your filesystem

4. Run using `node index.js`

Here is the good stuff!

```javascript
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
```
## selendroid

TBD