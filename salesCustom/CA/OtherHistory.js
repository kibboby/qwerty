import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image, ScrollView} from 'react-native';
import {CallHistoryRow,OtherHistoryRow,AppointmentHistoryRow} from "./CA/TaskandHIstoryTable";


const arryOtherHistory =[
  {id:1, Lname: "MAX",company: "Google. Co", time:"2 Feb 2020 11:00 am"},
  {id:2, Lname: "MINIS",company: "Nuclear", time:"3 Mar 2021 1:00 pm"},
  {id:3, Lname: "Willui ",company: "X", time:"4 Mar 2021 1:00 pm"},
  {id:4, Lname: "May",company: "Karuna", time:"5 Mar 2021 5:30 pm"},
];

//export default function App() {
export default ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}  style={styles.bgimage}>

    
      
<ScrollView style={{backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius:10, margin:"5%"}}>
      <View style={{paddingBottom:40, paddingTop:10}}>
        <View style={{borderRadius:10, backgroundColor:"#fff", paddingVertical:10, marginHorizontal:15, borderWidth:1, borderColor:"lightgrey", elevation: 2}}>

            {/* <View style={{flexDirection:"row",borderBottomWidth:1, borderColor:"white", paddingHorizontal:10, paddingBottom:2, marginBottom:3}}>
                <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Name
                </Text>
                <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Status
                </Text>
            </View> */}

            {arryOtherHistory.map((info) =>
                <OtherHistoryRow key={info.id} data={info} />
            )}



            </View>
      <StatusBar style="auto" />
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
    //alignItems:"center",
    justifyContent: 'center',
    //padding:"20%",
  },

  title:{
    fontWeight:"bold",
    fontSize:20,
    color:"black",
    alignItems:"flex-start",
  },

  flexrowfortable:{
    marginTop:10,
    marginBottom:10,
    flexDirection:"row",
    // paddingLeft:"20%",
    // paddingRight:"20%"
    justifyContent:"center"
  },
  
  bgimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "flex-start"
  },


});
