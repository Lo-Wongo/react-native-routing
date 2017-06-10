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
