import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState, Component} from 'react';
import {auth, db, storage} from "./firebase.js";
import {formatAMPM}from "./TablesandTimeFormat";

export const greenDClr = "#067d5b";
export const redDClr = "#630e0e";
export const blueDClr = "#27708a";
export const white="#fff"

const myheight=100;


export const OverdueTaskRow =({data})=>{

  const [Lead,setLead]=useState({});

  useEffect(() => {
    console.log(data)
    db.collection("leads").doc(data.leadId).get().then((doc) => {
          if (doc.exists) {
              let O = doc.data();
              console.log("Document data:", doc.data());
              O.time = formatAMPM(O.date.toDate());
              O.date = O.date.toDate();
              setLead(O);
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      });
      
  },[]);

  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.name}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {Lead.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "red", fontWeight:"bold",textAlign:"center"}}>
            {data.type} Task Overdue ({data.date.toDate().toLocaleString()})
          </Text>
          </View>   
        </View>
  )
};


export const CallTaskRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "green", fontWeight:"bold",textAlign:"center"}}>
                Call
          </Text>
          </View>   
        </View>
  )
};

export const AppointmentTaskRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: blueDClr, fontWeight:"bold",textAlign:"center"}}>
                Appointment
          </Text>
          </View>   
        </View>
  )
};

export const OtherTaskRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "black", fontWeight:"bold",textAlign:"center"}}>
                Others
          </Text>
          </View>   
        </View>
  )
};


export const CallHistoryRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color:greenDClr, fontWeight:"bold",textAlign:"center"}}>
                {data.time}- Call -
          </Text>
          </View>   
        </View>
  )
};

export const AppointmentHistoryRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color:blueDClr, fontWeight:"bold",textAlign:"center"}}>
                {data.time}- Appoinment -
          </Text>
          </View>   
        </View>
  )
};


export const OtherHistoryRow =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color:"black", fontWeight:"bold",textAlign:"center"}}>
                {data.time}- Other -
          </Text>
          </View>   
        </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
