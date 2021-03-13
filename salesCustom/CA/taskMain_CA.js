import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';

export default function App({navigation}) {

  const pressAlert=()=>{
    navigation.navigate('taskMainTab',{screen: "Overdue"});
  };

  const pressCall=()=>{
    navigation.navigate('taskMainTab',{screen: "Call"});
  };

  const pressAppoinment=()=>{
    navigation.navigate('taskMainTab',{screen: "Appointment"});
  };

  const pressOthers=()=>{
    navigation.navigate('taskMainTab',{screen: "Others"});
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>

      <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>Tasks Main</Text>
      </View>

      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <View style={styles.flexrow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={pressAlert}>
              <View style={styles.iconButtonBorder}>
                <Icon name='warning' size={40} color="#F8C018"/>
                <Text style={styles.icontext}>40</Text>
                <Text style={styles.icontext}>Overdue</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.iconButton} onPress={pressCall}>
              <View style={styles.iconButtonBorder}>
                <Icon name='call' size={40} color="#F8C018"/>
                <Text style={styles.icontext} >40</Text>
                <Text style={styles.icontext}>Call</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.flexrow}>
          <View style={styles.iconContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={pressAppoinment}>
              <View style={styles.iconButtonBorder}>
                <Icon name='groups' size={40} color="#F8C018"/>
                <Text style={styles.icontext} >40</Text>
                <Text style={styles.icontext}>Appointment</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={styles.iconButton} onPress={pressOthers}>
              <View style={styles.iconButtonBorder}>
                <Icon name='description' size={40} color="#F8C018"/>
                <Text style={styles.icontext}>40</Text>
                <Text style={styles.icontext}>Others</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },

  title:{
    fontWeight:"bold",
    fontSize:25,
    color:"white",
    marginTop: 10,
    alignItems:"flex-start",
  },

  flexrow:{
    marginTop:10,
    flexDirection:"row",
    // justifyContent:"space-around"
  },

  taskbutton:{
    marginRight:25,
    backgroundColor: "orange",
    borderRadius: 100,
    borderWidth:1,
    borderColor:"grey",
    width:10,
    height:10,
  },

  historybutton:{
    backgroundColor: "lightgrey",
    borderRadius: 100,
    //borderWidth:1,
    borderColor:"grey",
    width:10,
    height:10,
  },

  iconContainer:{
    marginRight:10,
  },

  iconButtonBorder:{
    borderWidth:2,
    borderColor:"#F8C018",
    borderRadius:10,
    padding:"10%",
    //textAlign:"center",
    //justifyContent:"center",
    alignItems:"center",
    width:110,
    height:100,
  },

  icontext:{
    color:"white",
    // fontSize:10,
    fontWeight:"bold",
  },

});
