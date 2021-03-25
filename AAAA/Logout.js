//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, Text, View, Button} from 'react-native';
//import all the components we are going to use.

export default class CAPage extends Component {
  static navigationOptions = {
    headerShown:false,
  };


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Text style={{textAlign: 'center', margin: 5}}>Successfully Logout. </Text>
          <Text style={{textAlign: 'center', margin: 5}}> Click the button to login again</Text>
        <Button title='Login'
        onPress={() =>navigate('Login')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});