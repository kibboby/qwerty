import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';
import {auth} from './firebase';

//export default function App() {
export default ({navigation, route}) => {

  const pressLogin =()=>{
    var em = LoginEmail.charAt(LoginEmail.length-1);
    if(em === " "){
        setLoginEmail(LoginEmail.slice(0, -1));
    }
        auth.signInWithEmailAndPassword(LoginEmail, Loginpassword)
            .then((user) => {
                console.log(user.user.uid);
                alert("Login Sucessful")
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage);
                if(errorCode === "auth/user-not-found"){
                    alert("No Account with that Email Address");
                }else if(errorCode === "auth/wrong-password" || errorCode === "auth/invalid-email"){
                    alert("Incorrect Email or Password");
                }else{
                    alert("An error occurred. Please Try Again");
                }
            });
};

  const pressForgotpassword =()=>{
    alert("nav to ForgotPassword .js");
    navigation.navigate("Forgot Password");
  };

  const [LoginEmail, setLoginEmail]=useState("");
  const [Loginpassword, setLoginpassword]=useState("");

  return (
    <View style={styles.container}>
    {/* https://wallpaperaccess.com/full/1503970.jpg */}
    {/* <ImageBackground source={{uri: ''}} style={styles.backgroundimage}> */}
    <ImageBackground source={require('./img/backgroundImg.png')} style={styles.backgroundimage}>
    <View style={styles.LogintitleContainer}>
      <Text style={styles.title}>Sales Customer Management System</Text>
    </View>

    <View style={styles.extra}>
    <View style={styles.usernameandpasswordcontainer}>

    <View style={styles.usernameC}>
      <Text style={styles.username}>Email : </Text>
      <TextInput 
      style={styles.input}
      placeholder='Email'
      onChangeText={(val) => setLoginEmail(val)}
       />
    </View>

    <View style={styles.passwordC}>
      <Text style={styles.password}>Password : </Text>
      <TextInput 
      secureTextEntry={true} 
      style={styles.input}
      placeholder='Password'
      onChangeText={(val) => setLoginpassword(val)}
      />
    </View>

    <View>
     <TouchableOpacity
      onPress= {pressForgotpassword}>
      <Text style={styles.forgot}>Forgot Password?</Text>
     </TouchableOpacity>
    </View>

    <View>
        <TouchableOpacity
         style={styles.SignINButton}
         onPress= {pressLogin}
         //onPress={() => this._onPressLoginButton()}
         //disabled={!this.state.isFormValid}
         >
         <Text style={styles.SignIN}>SIGN IN</Text>
     </TouchableOpacity>
     </View>

     {/* <Text >{"username====>"+ LoginEmail}</Text>
     <Text >{"username====>"+ Loginpassword}</Text> */}

    {/* <Text >{"password====>"+Base64.encode(this.state.LOGIN_password) }</Text> */}
     </View>
     </View>



      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //backgroundColor:"grey",
    alignItems: 'center',
    //justifyContent: 'center',
  },

  backgroundimage: {
    flex: 1,
    width:'100%',
    height:'100%',
    resizeMode: "cover",
    justifyContent: "center"

  },

  extra:{
    paddingLeft:"10%",
    paddingRight:"10%",
    alignItems:'center',
    // marginBottom:20,
  },

  usernameandpasswordcontainer:{
  backgroundColor:"#FFFFFF",
  padding: "10%",
  borderWidth:2,
  backgroundColor: 'rgba(255, 255, 255, 0.6)',
  borderColor:"black",
  alignItems:'center',
  borderRadius:10
  },

  LogintitleContainer: {
  padding:10,
  marginBottom:50,
  },

  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: "bold",
    color:"#F8C018",

  },

  input: {
    // borderWidth: 2,
    backgroundColor: '#F3EEEE',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderRadius:10,
    padding: 10,
    marginBottom:10,
    marginTop:5,
    width:200,
    alignSelf: 'flex-start',
  },

  forgot:{
    color:"#000000",
    fontSize:11,
    textAlign:"center",
  },

  SignINButton: {
    width:160 ,
    marginTop: 20,
    backgroundColor: "black",
    padding: 10,
    borderRadius: 10,
  },

  username: {
  fontWeight: "bold"
  },

  password:{
  fontWeight: "bold"
  },

  SignIN: {
    color: "#F8C018",
    fontSize: 20,
    fontWeight:'bold',
    justifyContent: "center",
    textAlign: "center",
  },
});
