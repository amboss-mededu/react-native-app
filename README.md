## MDF reading experiences POC 

This project implements a React native view into an Amboss IOS Swift app. I have followed the steps outlined in [Integrating a react native view in an existing app](https://reactnative.dev/docs/integration-with-existing-apps)

### Get started
Set up your environment as per instructions above.
In the root directory, run 
```
npm ci
npm start
```
to start the React native application server at http://localhost:8081. This serves the application bundle that is launched into a Javascript virtual machine within IOS application.

In project root, clone ios app and link the react native libraries with cocoapods.

```
git clone git@github.com:amboss-mededu/ios-avocado-spring.git
git checkout react-native-integration
cd ios-avocado-spring
pod install

```
The IOS application that launches the react native view on clicking `Login` button. 
Open `Knowledge.xcworkspace` workspace in `xcode` and build and run it within `IOS simulator`. 