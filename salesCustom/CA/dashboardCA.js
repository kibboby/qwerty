import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';
import {TableRowDashboard} from "./TablesandTimeFormat";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph
// } from 'react-native-chart-kit';
//import Pie from 'react-native-pie';
//AppTable

// const myheight=90;

const arry =[
      {id:1, name: "Walsom",company: "Google. Co", contacted:"Contacted", Quote:"RM 3000", Status:"Lost"},
      {id:2, name: "ERic",company: "TAKA", contacted:" NOt Contacted", Quote:"RM 3000", Status:"Won"},
      {id:3, name: "MARCC LEE HG",company: "UNIMAS", contacted:" NOT Contacted", Quote:"RM 3000", Status:"Won"},
      {id:4, name: "Kelly",company: "Modelling University of Malaysia", contacted:"Contacted", Quote:"RM 3000", Status:"Lost"},
];

// const TableRow =({data, handlePressLead, handlePressQuote, handlePressLost})=>{
//       return (
//             <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

//               <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
//                onPress={handlePressLead}>
//               <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
//                    {data.name}</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}> {data.company}</Text>
              
//               </TouchableOpacity>

//               <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
//                     {data.contacted}
//               </Text>
                

//               <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
//                onPress={handlePressQuote}>
//               <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
//                     {data.Quote}
//               </Text>
//               </TouchableOpacity>

//               <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
//                 onPress={handlePressLost}>
//               <Text style={{color: "red", fontWeight:"bold", textAlign:"center",width:"100%"}}>
//                     {data.Status}
//               </Text>
//               </TouchableOpacity>
//             </View>
//       )
// };

export default function App({navigation}) {

  const pressWon=()=>{
    alert("Won nav Remarks. js")
  }

  const pressLost=()=>{
    navigation.navigate('remark')
  }

  const pressQuote=()=>{
    alert("nav Quotation .js")
  }

  const pressLead=()=>{
    navigation.navigate('leadTop')
  }


  return (    
  <View style={styles.container}> 
      <ImageBackground source={require('./img/backgroundImg.png')}
        style={styles.backgroundImage}>
      <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>Dashboard</Text>
      </View>

    <View style={{paddingBottom:40, paddingTop:10}}>
        <View style={{borderRadius:10, backgroundColor:"#fff", paddingVertical:10, marginHorizontal:15, borderWidth:1, borderColor:"lightgrey", elevation: 2}}>

            <View style={{flexDirection:"row",borderBottomWidth:1, borderColor:"white", paddingHorizontal:10, paddingBottom:2, marginBottom:3}}>
                <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Name
                </Text>
                <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Contacted
                </Text>
                <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Quote Sent
                </Text>
                <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Status
                </Text>
            </View>

            {arry.map((info) =>
                <TableRowDashboard key={info.id} data={info} handlePressLead={pressLead} handlePressQuote={pressQuote} handlePressLost={pressLost} handlePressWon={pressWon}/>
            )}


            </View>
      {/* <StatusBar style="auto" /> */}
    </View>
    </ImageBackground>
  </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
    //padding:"20%"
  },

  title:{
    fontWeight:"bold",
    fontSize:25,
    color:"white",
    marginTop: 10,
    alignItems:"flex-start",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
});
