import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Card, List, Divider } from 'react-native-paper';

export default function App({navigation}) {
  //export default class Touchables extends Component {
  //const App = () => {

  //_onPressWonButton() {
  //alert('WON')
  //leadstatus="WON"
  //}

  //_onPressLoseButton() {
  //alert('LOSE')
  //leadstatus="LOSE"
  //}

  //state={
  //leadstatus:"",
  //}

  //const [leadstatus, setleadstatus] = useState(0);
  //onst onPress = () => setleadstatus();



  //render(){
  return (
    <View style={styles.container}>


        <ScrollView style={styles.scrollView}>

          <Text style={styles.title}>Edit Lead's Details</Text>

          <Card  style={styles.cardBorder}>
          <View style={styles.row}>
            <Text style={styles.details}>Status</Text>
          </View>
          </Card>

          <Card style={styles.cardBorder}> 
          <View style={styles.row}>
            <Text style={styles.details}>Quotation Sent to lead</Text>
            <Text style={styles.info}>RM0</Text>
          </View>
          </Card>

          <Card style={styles.cardBorder}>
          <View style={styles.row}>
            <Text style={styles.details}>Quotation Agreed by Lead</Text>
            <Text style={styles.info}>RM0</Text>
          </View>
          </Card>
          
          <Card style={styles.cardBorder}>
          <View style={styles.row}>
          <Text style={styles.Remarks}>Remarks</Text>
          <TextInput
            style={styles.inputR}
            placeholder='No remarks available'
            multiline={true}
            autoFocus={false}
            onChangeText={(text) => {
              this.setState(() => {
                return {
                  remarksDescription: text
                };
              })
            }}

          />
          </View>
          </Card>
        </ScrollView>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10%',
    margin: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  cardBorder:{
    borderWidth:1,
    marginTop: 10
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    //justifyContent: 'space-between',
  },

  WonButton: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  LoseButton: {
    backgroundColor: "red",
    marginLeft: 10,
    alignItems: "center",
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  buttoncontent: {
    color: "grey",
    marginTop: 20,
    marginBottom: 20,
  },

  details: {
    width: "30%",
    color: "grey"
    //fontWeight:"bold",
  },

  info: {
    fontWeight: "bold",
    width: '50%',
    //borderWidth:1,
  },

  border: {
    marginTop: 10,
    borderWidth: 1,
    padding: '3%',
  },

  bordertext: {
    fontWeight: "bold",
  },

  title2: {
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 20,
  },


  list: {
    marginTop: 20,
  },
});
