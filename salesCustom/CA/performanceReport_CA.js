import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button , TouchableOpacity, ImageBackground,Image} from 'react-native';

export default function App() {

  const  pressReportOpen= ()=>
  {alert( "nav to OpenLeads .js")};

  const  pressReportWon= ()=>
  {alert( "nav to WonLeads .js")};

  const  pressReportLost= ()=>
  {alert( "nav to LostLeads .js")};

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>
      <View>
      <Text style={styles.title}>Performance Report</Text>
      </View>

      <View style={{ marginTop:10 }}>
        <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.Button} onPress={pressReportOpen}>
           <View style={styles.OpenButtonBorder}>
           <Text style={styles.ReportText}>1</Text>
           <Text style={styles.ReportText}>Open</Text>
           </View>
        </TouchableOpacity>
        </View>
      </View>


      <View style={styles.flexrow}>
        <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.Button} onPress={pressReportWon}>
           <View style={styles.WonButtonBorder}>
           <Text style={styles.ReportText} >50</Text>
           <Text style={styles.ReportText}>Won</Text>
           </View>
        </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity style={styles.Button} onPress={pressReportLost}>
           <View style={styles.LostButtonBorder}> 
           <Text style={styles.ReportText} >10</Text>
           <Text style={styles.ReportText}>Lost</Text>
           </View>
        </TouchableOpacity>
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
    alignItems:"center",
    justifyContent: 'flex-start',
    padding:"20%",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
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
    backgroundColor:"blue",
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
    backgroundColor:"green",
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
    backgroundColor:"red",
    width:110,
    height:100
  },

  ReportText:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
  },

});
