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