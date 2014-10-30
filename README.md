# nemo-mobile-example

How to use nemo with ios-driver and selendroid

## ios-driver

Please reference ios-driver docs for more information: http://ios-driver.github.io/ios-driver/

### prerequisites

1. You will need to have an appropriate version of XCode, and version of the ios-driver JAR. As of this writing, I'm using:
  * XCode 5.1.1 with iPhoneSimulator7.1.sdk
  * ios-driver-0.6.6-SNAPSHOT.jar
  * OS 10.8.5

2. To run the ios-driver example in this repo, you'll need to change permissions on the MobileSafari.app used in the simulator. See here: http://ios-driver.github.io/ios-driver/?page=safari

3. Clone and install this repo: `$ git clone https://github.com/grawk/nemo-mobile-example.git; cd nemo-mobile-example; npm install;`

4. Look in index.js, and note the two hard-coded paths (for the ios-driver jar and the MobileSafari.app folder). Make sure these accurately reflect your filesystem

4. Run using `node ios.js`

### Look at

ios.js and the ios section of config.js

## selendroid

Please reference selendroid docs for more information: http://selendroid.io

### prerequisites

1. selendroid standalone with dependencies
2. node.js
3. the selendroid sample app
4. Android ADK with at least one suitable emulator

### Running

1. Modify the absolute paths in the android.js file to point to your selendroid and sample app
From this sample directory:

2. Run using `node android.js`