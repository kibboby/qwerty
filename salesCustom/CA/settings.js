import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function App({navigation}) {


  //render(){
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.row}>
        <TouchableOpacity>
          <Card style={styles.card}>
            <Icon name='person' size={70} style={styles.icon} />
            <Text style={styles.text}>Profile</Text>
        </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.card}>
            <Icon name='notifications' size={70} style={styles.icon} />
            <Text style={styles.text}>Notification</Text>
        </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity>
        <Card style={styles.card}>
          <Icon name='key' size={70} style={styles.icon} />
          <Text style={styles.text}>Password</Text>
      </Card>
      </TouchableOpacity>
      <TouchableOpacity>
          <Card style={styles.card}>
            <Icon name='help' size={70} style={styles.icon} />
            <Text style={styles.text}>Help</Text>
            </Card>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity>
          <Card style={styles.card}>
            <Icon name='logout' size={70} style={styles.icon} />
            <Text style={styles.text}>Logout</Text>
          </Card>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },

  card:{
    backgroundColor: "#ffffff",
    borderWidth: 1, 
    width: 120, 
    height:120,
    margin:10
  },

  icon:{
    textAlign: 'center',
    
  },

  text:{
    fontSize: 15,
    textAlign:'center'
  },

  row: {
    flex:1,
    flexDirection: "row",
    justifyContent:'center',
    margin:10
  },
});
