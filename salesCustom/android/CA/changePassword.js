import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image,ScrollView, KeyboardAvoidingView, Keyboard} from 'react-native';



export default function App() {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
     
  },[]);

  const [show,setShow]=useState(true);

  const pressSave =()=>{
    if(Newpsw==Retypepsw && Newpsw!="" && Oldpsw!="" && Newpsw!="")
    {
    alert("Resset Succesful nav to ProfileSetting .js")
    }
    else
    {alert('Pasword not Match or No Input')}
  };

  const pressCancel =()=>{
    alert("nav to ProfileSetting .js")
  };

  const [Oldpsw, setOldpsw]=useState("");
  const [Newpsw, setNewpsw]=useState("");
  const [Retypepsw, setRetypepsw]=useState("");
  


  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.title}>Change Password</Text>
      </View>

      <View style={styles.SetpswContainer}>
      <Text style={styles.intructionpsw}>Old Password</Text>
        <TextInput
            //secureTextEntry={true} 
            style={styles.inputpsw}
            //defaultValue="RM "
            // onBlur={ () => setShow(true) }
            // onFocus={ () => setShow(false) }
            onChangeText={(val) => setOldpsw(val)}
            />
        <Text style={styles.intructionpsw}>New Password</Text>
        <TextInput 
            secureTextEntry={true} 
            style={styles.inputpsw}
            // onBlur={ () => setShow(true) }
            // onFocus={ () => setShow(false) }
            onChangeText={(val) => setNewpsw(val)}
            />
        <Text style={styles.intructionpsw}>Retype New Password</Text>
        <TextInput 
            //secureTextEntry={true} 
            style={styles.inputpsw}
            // onBlur={ () => setShow(true) }
            // onFocus={ () => setShow(false) }
            onChangeText={(val) => setRetypepsw(val)}
            />

          
            {/* <Text >{Oldpsw}</Text>
            <Text >{Newpsw}</Text>
            <Text >{Retypepsw}</Text> */}
        </View>
      
      
      {!isKeyboardVisible &&  <View style={styles.ButtonView}>
       <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            //onPress={this. _onPressCancelChangePswButton}
            onPress= {pressSave}
            >
            <Text style={styles.ButtonContent}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
           // onPress={this._onPressChangePswButton}
           onPress= {pressCancel}
           >
         <Text style={styles.ButtonContent}>Cancel</Text>
        </TouchableOpacity>
        

        </View>
        }
     

      <StatusBar style="auto" />
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent: 'flex-start',
    paddingTop:"20%",
  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    color:"black",
    alignItems:"flex-start",
  },

  SetpswContainer:{
    marginTop:20,
    width:"80%",
    // backgroundColor:"grey",
    },
  
  intructionpsw:{
    fontWeight:"bold",
    marginTop:10,
    color:"orange",
    },
  
  inputpsw:{
    marginTop:10,
    borderWidth:2,
    borderColor:"lightgrey",
    width:"100%",
    //backgroundColor:"lightgrey",
    padding:10,
    borderRadius:5,
    },
  
  ButtonView: {
    width: '100%',
    backgroundColor:"white",
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems:"stretch",
    borderWidth:2,
    borderColor:"lightgrey",
    //justifyContent: 'space-around',
    //backgroundColor:"black",
    },
  
  Button:{
    borderWidth:3,
    //borderColor:"lightgrey",
    // backgroundColor:'black',
    padding: 10,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    borderRightColor: 'lightgrey',
    width:"50%",
    // borderRadius:5,
    },
  
  ButtonContent:{
    textAlign:'center',
    color:"orange",
    // fontWeight:'bold',
    },


});
