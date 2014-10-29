# nemo-mobile-example

How to use nemo with ios-driver and selendroid

## ios-driver

1. You will need to have an appropriate version of XCode, and version of the ios-driver JAR. As of this writing, I'm using:
  * XCode 5.1.1 with iPhoneSimulator7.1.sdk
  * ios-driver-0.6.6-SNAPSHOT.jar
  * OS 10.8.5

2. To run the example in this repo, you'll need to change permissions on the MobileSafari.app used in the simulator. See here: http://ios-driver.github.io/ios-driver/?page=safari

3. Look in index.js, and note the two hard-coded paths (for the ios-driver jar and the MobileSafari.app folder). Make sure these accurately reflect your filesystem

4. As long as you've run `npm install` you should be able now to run the script by using `node index.js`

## selendroid

TBD