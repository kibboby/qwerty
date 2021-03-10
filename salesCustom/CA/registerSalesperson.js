import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import firebase from './firebase';



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      Name: '',
      password: '',
      designation: '',
      email: '',
      contact: '',
      isLoading: false
    };
  }

  // _onPressCancel() {
  //   alert('Cancel')
  // }

  // _onPressSave() {
  //   alert('Save')
  // }

  

  updateInputVal = (val, prop)=> {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  registerUser =()=>{
    if(this.state.email === '' && this.state.password === ''){
      Alert.alert('Enter details to register!')
    }else{
        this.setState({
          isLoading:true,
        })
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
          res.user.updateProfile({
            Name: this.state.Name
          })
          console.log("user registered successfully!")
          this.setState({
            isLoading: false,
            Name: '',
            email: '',
            password: '',
            contact: '',
            designation: ''
          })
          // this.props.navigation.navigate('Login')
        })
        .catch(error => this.setState({errorMessage: error.message}))
      }
    }
  

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView>
        <View style={styles.container}>
        <ImageBackground source={require('./img/backgroundImg.png')}
          style={styles.backgroundImage}>
          <Text style={styles.instruction}>Name</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={(val) => this.updateInputVal(val, 'Name')}
          />

          <Text style={styles.instruction}> Password</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
          />

          <Text style={styles.instruction}>Email</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />

          <Text style={styles.instruction}>Contact</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={(val) => this.updateInputVal(val, 'contact')}
          />

          <Text style={styles.instruction}>Designation</Text>
          <TextInput
            //secureTextEntry={true} 
            style={styles.input}
            onChangeText={(val) => this.updateInputVal(val, 'designation')}
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
              onPress={() => this.registerUser()} 
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
  },

  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});
