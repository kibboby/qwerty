import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App() {

  const pressTaskMainPage=()=>{
    alert('nav to TaskMainPage .js')
  };

  const pressHistory=()=>{
    alert('nav to HistoryPage .js')
  };

  const pressCall=()=>{
    alert('nav to call history page')
  };

  const pressAppoinment=()=>{
    alert('nav to appointment history page')
  };

  const pressOthers=()=>{
    alert('nav to other history page')
  };

  return (
    <View style={styles.container}>

      <View>
      <Text style={styles.title}>History</Text>
      </View>

      <View style={styles.flexrow}>
        <View >
          <TouchableOpacity style={styles.taskbutton} onPress={pressTaskMainPage}><Text> </Text></TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.historybutton} onPress={pressHistory}><Text> </Text></TouchableOpacity>
        </View>
      </View>


      <View style={styles.flexrow}>
        <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={pressCall}>
           <View style={styles.iconButtonBorder}>
           <Icon name='call' size={40} /> 
           <Text style={styles.icontext} >40</Text>
           <Text style={styles.icontext}>Call</Text>
           </View>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.iconButton} onPress={pressAppoinment}>
           <View style={styles.iconButtonBorder}>
           <Icon name='groups' size={40} /> 
           <Text style={styles.icontext} >40</Text>
           <Text style={styles.icontext}>Appoinment</Text>
           </View>
        </TouchableOpacity>
        </View>
      </View>


      <View style={{ marginTop:10 }}>
        <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={pressOthers}>
           <View style={styles.iconButtonBorder}>
           <Icon name='description' size={40} /> 
           <Text style={styles.icontext}>40</Text>
           <Text style={styles.icontext}>Others</Text>
           </View>
        </TouchableOpacity>
        </View>

      </View>




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
    padding:"20%",
  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    color:"black",
    alignItems:"flex-start",
  },

  flexrow:{
    marginTop:10,
    flexDirection:"row",
    // justifyContent:"space-around"
  },

  taskbutton:{
    marginRight:25,
    backgroundColor: "lightgrey",
    borderRadius: 100,
    //borderWidth:1,
    borderColor:"grey",
    width:10,
    height:10,
  },

  historybutton:{
    backgroundColor: "orange",
    borderRadius: 100,
    borderWidth:1,
    borderColor:"grey",
    width:10,
    height:10,
  },

  iconContainer:{
    marginRight:10,
  },

  iconButtonBorder:{
    borderWidth:2,
    borderColor:"grey",
    borderRadius:10,
    padding:"10%",
    textAlign:"center",
    alignItems:"center",
    width:110,
    height:100
  },

  icontext:{
    color:"orange",
    // fontSize:10,
    fontWeight:"bold",
  },

});
