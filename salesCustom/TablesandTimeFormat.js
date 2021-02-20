import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export const greenDClr = "#067d5b";
export const redDClr = "#630e0e";
export const blueDClr = "#27708a";
export const white="#fff"

const myheight=100;




export const TableRowDashboard =({data, handlePressLead, handlePressQuote, handlePressLost, handlePressWon})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
           onPress={handlePressLead}>
          <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.name}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          
          </TouchableOpacity>

          {/* <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color:data.contacted === "Contacted"? blueDClr:white, fontWeight:"bold",textAlign:"center"}}>
                {data.contacted}
          </Text> */}
          {data.contacted === "Contacted"? 
          <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color:data.contacted === "Contacted"? blueDClr:white, fontWeight:"bold",textAlign:"center"}}>Contacted</Text> : 
          <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color:data.contacted === "Contacted"? blueDClr:white, fontWeight:"bold",textAlign:"center"}}></Text> }  

          <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
           onPress={handlePressQuote}>
          <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                {data.Quote}
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
            onPress={data.Status=== "Won"? handlePressWon:handlePressLost}>
          <Text style={{color:data.Status === "Won"? greenDClr:redDClr, fontWeight:"bold", textAlign:"center",width:"100%"}}>
                {data.Status}
          </Text>
          </TouchableOpacity>
        </View>
  )
};



export const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'P.M.' : 'A.M.';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};


export const TableRowWon =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.33,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.33,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.33,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.33,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                {data.QuoteSent}
          </Text>
          </View>

          <View style={{flex:0.33,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.33,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                {data.QuoteAgreed}
          </Text>
          </View>
          
          
        </View>
  )
};


export const TableRowLost =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                {data.Remarks}
          </Text>
          </View>   
        </View>
  )
};


export const TableRowOpen =({data})=>{
  return (
        <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
               {data.Lname}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}} numberOfLines={1}> {data.company}</Text>
          </View>
          
          <View style={{flex:0.5,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}>
          <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                {data.Status}
          </Text>
          </View>   
        </View>
  )
};


