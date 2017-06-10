# React Native Routing

## Step 1 - Getting the boilerplate and more control

* `npm install -g create-react-native-app`.
* `create-react-native-app projectName`.
* `npm run eject`. ( This effectively gives you an `index.android.js` and `index.ios.js` )
* `npm run ios`. ( Runs ios simulator on mac )
* `npm run android`. ( cry, cry a lot. Can't get the SDK download to work )

## Step 2 - Getting a router

* `npm install --save react-navigation`.
* Create some dummy routes:
  * import `react` from `"react"`.
  * import `view` and `text` from `"react-native"`.
  * Export a view and text.
* Create a `router.js` file at the root level:
  * import `StackNavigator` from `"react-navigation"`
  * import all components you want to include in the router.
  * export default `StackNavigator` invoked with an object as the first parameter:
    * This object will contain all possible screen routes.

## Step 3 - Adding the router to the application ( iOS )

* Open `index.ios.js`
* Import `router` from `src/router.js`
* Modify the `registerComponent` to use `router` instead of `App`.

## Step 4 - Adding routes in the application

* Import `Button` from `"react-native"`.
* Create a button with a `title` and `onPress` prop:
  * `onPress` should call `navigate` from `this.props.navigation` ( This gets added from the `StackNavigator` )
    * The first parameter of `onPress` is the name of the screen you want to go to.
    * The second parameter is can be an object that are route parameters. 

## Step 5 - Accessing Route Parameters

* All route parameters are stored on `this.props.navigation.state.params`.

## Step 6 - Setting navigationOptions

* Navigation Options can be set by using `static navigationOptions` and setting it equal to an object with option properties.
  * This can also be dynamic by setting it equal to a function that returns an object with option properties.
    * The function gets passed the same props that are available to the screen component

<details>

<summary> <code> src/router.js </code> </summary>

```jsx
import { StackNavigator } from "react-navigation" ;

// Components
import App from './components/App';
import Page1 from './components/Page1/Page1';

export default StackNavigator({
  home: { screen: App },
  page1: { screen: Page1 },
  page2: { screen: Page2 } 
})
```

</details>

<details>

<summary> <code> src/components/App.js </code> </summary>

```jsx
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  static navigationOptions = { title: 'Home' };
  render() {
    const { navigate } = this.props.navigation;
    console.log( this.props );
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button 
          title="Click me to go to page1"
          onPress={ () => navigate('Page1', { test: 'Parameters are easy!', title: 'Parameters are dynamic!' })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

</details>

<details>

<summary> <code> src/components/Page1/Page1.js </code> </summary>

```jsx
import React from "react";
import { View, Text, Button } from "react-native";

class Page1 extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })
  
  render() {
    const { navigation } = this.props;
    console.log( navigation.state.params.test );
    return (
      <View>
        <Text> This is page 1 </Text>
        <Text> This is a param: { navigation.state.params.test } </Text>
        <Button
          title='Back to home!'
          onPress={ () => navigation.navigate('Home')}
        />
      </View>
    )
  }
}

export default Page1;
```

</details>