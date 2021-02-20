import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
export default class App extends Component {
    state = {  
        switchValue1: false,
        switchValue2: false,
    };  

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.title}>Notification</Text>
        <Card style={styles.cardBorder}>
            <View style={styles.row}>
                <Text style={styles.text}>You just got assigned to a lead!</Text>
                <Text style={styles.time}>1:45PM</Text>
            </View>
        </Card>
        <Card style={styles.cardBorder}>
        <View style={styles.row}>
            <Text style={styles.text}>Appointment with Elsa Swift</Text>
            <Text style={styles.time}>1:45PM</Text>
        </View>
        </Card>
        <StatusBar style="auto" />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: "10%",
    margin: 20
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
    
  },
  cardBorder:{
    borderWidth:1,
    marginTop: 10,
  },
  text: {
      fontSize: 15,
        padding: 5,
  },
  time: {
    padding: 5,
    alignSelf: "flex-end"
},
  row: {
    flexDirection: "column",
    justifyContent: 'space-around',
    
  },

  Button: {
    backgroundColor: "black",
    padding: 10,
    width: 130,
    borderRadius: 5,
  },

  ButtonContent: {
    textAlign: 'center',
    color: "white",
    fontWeight: 'bold',
  },


});
