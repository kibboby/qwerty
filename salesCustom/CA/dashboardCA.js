import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { orange, TableRowDashboard } from "./TablesandTimeFormat";
import { auth, db, storage } from "./firebase";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { blueDClr, greenDClr } from './TaskandHIstoryTable';


// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph
// } from 'react-native-chart-kit';
//import Pie from 'react-native-pie';
//Dashboard

// const myheight=90;

const arry = [
  { id: 1, name: "Walsom", company: "Google. Co", contacted: "Contacted", Quote: "RM 3000", Status: "Lost" },
  { id: 2, name: "ERic", company: "TAKA", contacted: " NOt Contacted", Quote: "RM 3000", Status: "Won" },
  { id: 3, name: "MARCC LEE HG", company: "UNIMas", contacted: " NOT Contacted", Quote: "RM 3000", Status: "Won" },
  { id: 4, name: "Jelly", company: "Talor", contacted: "Contacted", Quote: "RM 3000000", Status: "Won" },
  { id: 5, name: "Joy", company: "University of Malaysia", contacted: "Contacted", Quote: "RM 3000", Status: "Lost" },
  { id: 6, name: "Pau", company: "SUITS", contacted: "Contacted", Quote: "RM 3000", Status: "Lost" },
  { id: 7, name: "Meow", company: "UCSI", contacted: "Contacted", Quote: "RM 3000", Status: "Lost" },
  { id: 8, name: "Liew", company: "UITS", contacted: "Contacted", Quote: "RM 3000", Status: "Lost" },
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

//export default function App() {
export default ({ navigation, route }) => {

  var data = db.collection("users");

  const [username, setUsername] = useState("");
  const [leads, setLeads] = useState([]);


  useEffect(() => {

    var user = auth.currentUser
    // console.log(user.uid);
    if (user) {
      db.collection("users").where("UID", "==", "HiVB7rApJqMSbGfLTPEbtVVdvXc2")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            db.collection("leads").where("userId", "==", doc.id)
              .get()
              .then((querySnapshot) => {
                let leadsArr = [];
                querySnapshot.forEach((docLeads) => {
                  let leads = docLeads.data();
                  leads.id = docLeads.id;
                  leadsArr.push(leads);
                  // doc.data() is never undefined for query doc snapshots
                  console.log(docLeads.id, " => ", docLeads.data());
                });
                setLeads(leadsArr);
                console.log(leadsArr);
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });

            console.log(doc.id, " => ", doc.data());
            setUsername(doc.data().name)
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }
  }, []);

  const pressWon = () => {
    alert("Won nav Remarks. js")
    // navigation.navigate("Quotation");
  }

  const pressLost = () => {
    alert("Lost nav Remarks. js")
    navigation.navigate("remarks");
  }

  const pressQuote = () => {
    alert("nav Quotation .js")
    // navigation.navigate("Quotation");
  }

  const pressLead = () => {
    alert("nav LeadsDetails .js")
    navigation.navigate("leadTop");
  }

  const pressNotification = () => {
    alert("nav to Notification .js ");
    // navigation.navigate('Notification');

  }



  // const data = [
  //   { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  //   { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
  // ]

  return (
    <View style={styles.container}>
      {/* <Text>{username}</Text> */}
      <ImageBackground source={require('./img/backgroundImg.png')} style={styles.bgimage}>
        {/* <View style={styles.DashboardtitleContainer}>
      <Text style={styles.titleDashboard}>Dashboard</Text>
      <TouchableOpacity style={{marginLeft:10, padding:1}} onPress={pressNotification}>
      <Icon name='notifications' size={25}  color="orange"/> 
      </TouchableOpacity>
      </View> */}
        <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 10, margin: "5%" }}>
          <View style={{ paddingBottom: 40, paddingTop: 10 }}>
            <View style={{ borderRadius: 10, backgroundColor: "#fff", marginHorizontal: 15, borderWidth: 1, borderColor: orange, elevation: 2, borderTopWidth: 0 }}>

              <View style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: orange, backgroundColor: orange, paddingHorizontal: 10, paddingBottom: 4, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                <Text style={{ flex: 0.25, fontSize: 13, paddingVertical: 2, color: "black", fontWeight: "bold", textAlign: "center" }}>
                  Name
                </Text>
                <Text style={{ flex: 0.25, fontSize: 13, paddingVertical: 2, color: "black", fontWeight: "bold", textAlign: "center" }}>
                  Contacted
                </Text>
                <Text style={{ flex: 0.25, fontSize: 13, paddingVertical: 2, color: "black", fontWeight: "bold", textAlign: "center" }}>
                  Quote Sent
                </Text>
                <Text style={{ flex: 0.25, fontSize: 13, paddingVertical: 2, color: "balck", fontWeight: "bold", textAlign: "center" }}>
                  Status
                </Text>
              </View>

              {/* <View style={{flexDirection:"row",borderTopWidth:1,  borderColor:"lightgrey", paddingHorizontal:10, paddingTop:2, marginBottom:3, alignItems:"center", height:myheight}}>

              <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
               onPress={pressLead}>
              <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}  numberOfLines={1}>
                    Siti Nur Alliahkjsdfsfsdfdsf sf dsfs fsf fd</Text><Text style={{fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}> Google.Co</Text>
              
              </TouchableOpacity>

              <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                    Contacted
              </Text>
                

              <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
               onPress={pressQuote}>
              <Text style={{flex:0.25,fontSize: 13, paddingVertical: 2, color: "orange", fontWeight:"bold",textAlign:"center"}}>
                    RM 12000
              </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{flex:0.25,fontSize: 13, paddingVertical: 2, fontWeight:"bold",textAlign:"center"}}
                onPress={pressLost}>
              <Text style={{color: "red", fontWeight:"bold", textAlign:"center",width:"100%"}}>
                    Lost
              </Text>
              </TouchableOpacity>
            </View> */}

              {leads.map((info) =>
                <TableRowDashboard key={info.id} data={info} navigation={navigation} handlePressLead={pressLead} handlePressQuote={pressQuote} handlePressLost={pressLost} handlePressWon={pressWon} />
              )}


            </View>
            {/* <StatusBar style="auto" /> */}
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
    //alignItems: 'center',
    // justifyContent: 'center',
    //padding:"20%"
  },

  DashboardtitleContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },

  titleDashboard: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    alignItems: "flex-start",
  },

  bgimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "flex-start"
  },
});
