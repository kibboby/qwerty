import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ImageBackground,
    ScrollView,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/AntDesign';

import firebase from '@react-native-firebase/app';

export default class CR_OL extends Component {
    render() {
      return (
        <View style={styles.container}>
          {/* <ImageBackground source={require('./backgroundImg.png')}
            style={styles.backgroundImage}> */}
            <Text style={styles.text}>Open Leads Report</Text>
            <View style={styles.nav}>
              <TouchableOpacity style={styles.roundButton} />
              <TouchableOpacity style={styles.roundButton2} />
              <TouchableOpacity style={styles.roundButton2} />
            </View>
  
            <TouchableOpacity style={styles.bckground}>
              <View style={styles.header}>
                <Text style={styles.ttleheader}>Name</Text>
                <Text style={styles.verticalLine}>|</Text>
                <Text style={styles.ttleheader}>Status</Text>
              </View>
  
              <ScrollView contentContainerStyle={styles.box}>
                <View style={styles.info}>
                  <View style={styles.custInfo}>
                    <Text numberOfLines={1} style={styles.custName}>Siti Nur Aliah</Text>
                    <Text numberOfLines={1} style={styles.custCompany}>Google Inc</Text>
                  </View>
                  <Text style={styles.verticalLine2}>|</Text>
                  <Text numberOfLines={1} style={styles.custStatus}>New lead</Text>
                </View>
                <View style={styles.info2}>
                  <Text style={styles.textSLinCharge}>Person In Charge: </Text>
                  <Text style={styles.SLinCharge}>Siti Nur Aliah</Text>
                </View>
              </ScrollView>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.roundButton3} >
              <Icon name="filter" size={30} color="black" style={styles.icon} />
            </TouchableOpacity>
          {/* </ImageBackground> */}
        </View>
      );
    }
  }
  
  let styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: "cover"
    },
    nav: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: "center",
      maxHeight: 11,
      marginTop: '5%',
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    roundButton: {
      width: 11,
      height: 11,
      borderRadius: 11,
      margin: "4%",
      backgroundColor: '#F8C018',
      alignSelf: 'center',
  
    },
    roundButton2: {
      width: 11,
      height: 11,
      borderRadius: 11,
      margin: "4%",
      backgroundColor: 'white',
      alignSelf: 'center'
    },
    bckground: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      width: "80%",
      height: "70%",
      alignSelf: 'center',
      margin: '5%',
      borderRadius: 10
    },
    header: {
      flexDirection: 'row',
      alignSelf: 'center',
      backgroundColor: '#F8C018',
      borderRadius: 10,
      marginTop: 10,
      width: "91%",
      justifyContent: 'space-evenly'
    },
    ttleheader: {
      fontSize: 16,
      margin: "4%"
    },
    verticalLine: {
      color: "white",
      fontSize: 27,
      marginTop: 3
    },
    info: {
      flexDirection: 'row',
    },
    info2: {
      flexDirection: 'row',
      alignSelf: 'center',
      margin: "1%"
    },
    custInfo: {
      margin: 5,
      width: "45%"
    },
    custCompany: {
      color: "#B56118",
    },
    custStatus: {
      margin: 5,
      width: "45%",
      alignSelf: 'center',
      textAlign: 'center',
      color: "#B56118",
    },
    verticalLine2: {
      color: "#F8C018",
      fontSize: 30,
      marginTop: 2,
    },
    box: {
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      marginTop: 10,
      width: "91%",
      maxHeight: "50%",
      justifyContent: 'space-evenly'
    },
    SLinCharge: {
      fontSize: 12,
      color: "#B56118",
    },
    textSLinCharge: {
      fontSize: 12
    },
    roundButton3: {
      width: 41,
      height: 41,
      borderRadius: 41,
      marginTop: "3%",
      marginRight: '8%',
      backgroundColor: '#F8C018',
      alignSelf: 'flex-end',
    },
    icon:{
      alignSelf: 'center',
      marginTop: 5
    }
  })
  