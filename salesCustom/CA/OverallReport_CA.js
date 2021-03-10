import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,ImageBackground, TouchableOpacity,Image} from 'react-native';

export default function App({navigation}) {

  const pressReportOpen = () => {
    navigation.navigate("leadsStatus", { screen: 'Open' })
  };

  const pressReportWon = () => {
    navigation.navigate("leadsStatus", { screen: 'Won' })
  };

  const pressReportLost = () => {
    navigation.navigate("leadsStatus", { screen: 'Lost' })
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>
      <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>Report</Text>
      </View>

        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <View style={{ marginTop: 10 }}>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.Button} onPress={pressReportOpen}>
                <View style={styles.OpenButtonBorder}>
                  <Text style={styles.ReportText}>1</Text>
                  <Text style={styles.ReportText}>Open Leads</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.flexrow}>
            <View style={styles.iconContainer}>
              <TouchableOpacity style={styles.Button} onPress={pressReportWon}>
                <View style={styles.WonButtonBorder}>
                  <Text style={styles.ReportText} >50</Text>
                  <Text style={styles.ReportText}>Won Leads</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity style={styles.Button} onPress={pressReportLost}>
                <View style={styles.LostButtonBorder}>
                  <Text style={styles.ReportText} >10</Text>
                  <Text style={styles.ReportText}>Lost Leads</Text>
                </View>
              </TouchableOpacity>
            </View>
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
    justifyContent: 'flex-start',
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
    marginTop: 10
  },

  flexrow:{
    marginTop:10,
    flexDirection:"row",
    // justifyContent:"space-around"
  },


  iconContainer:{
    marginRight:10,
  },

  OpenButtonBorder:{
    borderWidth:2,
    borderColor:"grey",
    borderRadius:10,
    padding:"10%",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    backgroundColor:"#0055FF",
    width:110,
    height:100
  },

  WonButtonBorder:{
    borderWidth:2,
    borderColor:"grey",
    borderRadius:10,
    padding:"10%",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    backgroundColor:"#19CB37",
    width:110,
    height:100
  },

  LostButtonBorder:{
    borderWidth:2,
    borderColor:"grey",
    borderRadius:10,
    padding:"10%",
    justifyContent:"center",
    textAlign:"center",
    alignItems:"center",
    backgroundColor:"#F62727",
    width:110,
    height:100
  },

  ReportText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    textAlign:'center'
  },

});
