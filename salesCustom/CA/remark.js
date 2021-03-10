import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';

export default function App({navigation}) {
  
  const pressSave =()=>{
    if(EditRemarks!="")
    {
    alert("Resset Remarks Succesful nav to Dashboard .js")
    }
    else
    {alert('Remarks nothing to Update')}
  };

  const pressCancel =()=>{
    navigation.navigate("dashboard")
  };


  const [Remarks, setRemarks]=useState("");
  const [EditRemarks, setEditRemarks]=useState("");


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.title}>Remarks</Text>
        </View>

        <View style={{alignItems: 'center', marginTop: 30}}>
          <TextInput
            style={styles.inputRemarks}
            placeholder='Write the remarks for the leads here.'
            placeholderTextColor="orange"
            multiline={true}
            autoFocus={true}
            onChangeText={(val) => setEditRemarks(val)}
            borderRadius={10}
            borderColor='#F8C018'
          />
        </View>
        {/* <Text>{EditRemarks}</Text> */}



        <View style={styles.ButtonView}>
          <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            //onPress={this. _onPressCancelChangePswButton}
            onPress={pressSave}
          >
            <Text style={styles.ButtonContent}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button}
            //onPress={this._onPressLoginButton}
            //disabled={!this.state.isFormValid}
            // onPress={this._onPressChangePswButton}
            onPress={pressCancel}
          >
            <Text style={styles.ButtonContent}>Cancel</Text>
          </TouchableOpacity>


        </View>

      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  
  title:{
    fontWeight:"bold",
    fontSize:25,
    color:"white",
    alignItems:"flex-start",
    marginTop: 20
  },

  inputRemarks:{
    borderWidth:2,
    borderColor:"lightgrey",
    marginTop:10,
    padding:10,
    //fontWeight:"bold",
    height:200,
    width:"70%",
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
