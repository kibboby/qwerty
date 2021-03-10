import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput,ImageBackground } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

export default class App extends Component {

  _onPressCancel() {
    alert('Cancel')
  }

  _onPressSave() {
    alert('Save')
  }

  state = {
    notif: '',
    Name: '',
    designation: '',
    email: '',
    contact: '',
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground source={require('./img/backgroundImg.png')}
          style={styles.backgroundImage}>
          <Text style={styles.instruction}> Name</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ Name: text })}
          />

          <Text style={styles.instruction}>Email</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
          />

          <Text style={styles.instruction}>Contact</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ contact: text })}
          />

          <Text style={styles.instruction}>Designation</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={text => this.setState({ designation: text })}
          />

                <Text style={styles.instruction}>Notification Reminder Time</Text>
                <TextInput
                    //secureTextEntry={true} 
                    style={styles.input}
                    onChangeText={text => this.setState({ notif: text })}
                />

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={()=> this.props.navigation.goBack()} 
            >
              <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Button}
              //onPress={this._onPressLoginButton}
              //disabled={!this.state.isFormValid}
              onPress={()=> this.props.navigation.goBack()} 
            >
              <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>


          </View>

          <StatusBar style="auto" />
          </ImageBackground>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },

  instruction: {
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },

  input: {
    backgroundColor: "lightgrey",
    //width:'100%',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },

  Button: {
    backgroundColor: "black",
    padding: 10,
    width: 130,
    borderRadius: 5,
  },

  ButtonContent: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
  },
  AddressInput: {
    height: 100,
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  }

});
