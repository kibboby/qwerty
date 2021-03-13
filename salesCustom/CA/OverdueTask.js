import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { CallTaskRow, OtherTaskRow, OverdueTaskRow, AppointmentTaskRow } from "./TaskandHIstoryTable";
import { auth, db, storage } from "./firebase.js";


const arryOverdueTask = [
  { id: 1, Lname: "MAX", company: "Google. Co", Status: "Others", Time: "Feb 27, 2021" },
  { id: 2, Lname: "MINIS", company: "Nuclear", Status: "Appoinment", Time: "Feb 26, 2021" },
  { id: 3, Lname: "Willui ", company: "X", Status: "Call", Time: "Feb 27, 2021" },
  { id: 4, Lname: "May", company: "Karuna", Status: "Call", Time: "Feb 28, 2021" },
];


//export default function App() {
export default ({ navigation, route }) => {

  const [Tasks, SetTasks] = useState([]);

  const pressWonLeads = () => {
    alert('nav to WonLeads .js')
    navigation.navigate('Won Leads');
  };

  const pressLostLeads = () => {
    alert('nav to LostLeads .js')
    navigation.navigate('Lost Leads');
  };

  const pressOpenLeads = () => {
    alert('nav to OpenLeads .js')
    navigation.navigate('Open Leads');
  };


  useEffect(() => {

    var user = auth.currentUser
    console.log(user.uid)
    if (user) {
      db.collection("users").where("UID", "==", "HiVB7rApJqMSbGfLTPEbtVVdvXc2")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            var today = new Date();
            db.collection("tasks").where("userId", "==", doc.id).where("date", "<", today)
              .get()
              .then((querySnapshot) => {
                let TasksArr = [];
                querySnapshot.forEach((docTasks) => {
                  let tasks = docTasks.data();
                  tasks.id = docTasks.id;
                  TasksArr.push(tasks);
                  // doc.data() is never undefined for query doc snapshots
                  console.log(docTasks.id, " => ", docTasks.data());
                });
                SetTasks(TasksArr);
                console.log(TasksArr);
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });

            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    }



  }, []);


  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')} style={styles.bgimage}>


        <ScrollView style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)', borderRadius: 10, margin: "5%" }}>
          <View style={{ paddingBottom: 40, paddingTop: 10 }}>
            <View style={{ borderRadius: 10, backgroundColor: "#fff", paddingVertical: 10, marginHorizontal: 15, borderWidth: 1, borderColor: "lightgrey", elevation: 2 }}>

              {/* <View style={{flexDirection:"row",borderBottomWidth:1, borderColor:"white", paddingHorizontal:10, paddingBottom:2, marginBottom:3}}>
                <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Name
                </Text>
                <Text style={{flex:0.5,fontSize: 13, paddingVertical: 2, color: "grey", fontWeight:"bold",textAlign:"center"}}>
                    Status
                </Text>
            </View> */}

              {Tasks.map((info) =>
                <OverdueTaskRow key={info.id} data={info} />
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

  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    alignItems: "flex-start",
  },

  flexrowfortable: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    // paddingLeft:"20%",
    // paddingRight:"20%"
    justifyContent: "center"
  },

  bgimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "flex-start"
  },

});
