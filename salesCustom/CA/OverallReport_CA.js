import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, TouchableOpacityBase
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';


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
          <Text style={styles.text}>Report</Text>

          <View style={styles.bckground}>
            <Text style={styles.subTitle}>Overall Performance</Text>
            <View style={styles.row}>
              <View style={styles.openLead}>
                <Text></Text>
              </View>
              <TouchableOpacity style={styles.openLead}
                onPress={pressReportOpen}>
                <Text style={styles.no}>40</Text>
                <Text numberOfLines={2} style={styles.typeTitle}>Open Leads</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row2}>
              <TouchableOpacity style={styles.wonLead}
                onPress={pressReportWon}>
                <Text style={styles.no}>40</Text>
                <Text numberOfLines={2} style={styles.typeTitle}>Won Leads</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.lostLead}
                onPress={pressReportLost}>
                <Text style={styles.no}>40</Text>
                <Text numberOfLines={2} style={styles.typeTitle}>Lost Leads</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.roundButton3} >
            <Icon name="filter" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>

        </ImageBackground>
      </View>
    )
  }






let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: '3%',
  },
  bckground: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: "80%",
    alignSelf: 'center',
    borderRadius: 10,
    paddingBottom: '5%',
    marginTop: '13%'
  },
  subTitle: {
    fontSize: 18,
    color: '#F8C018',
    textAlign: 'center',
    marginTop: '3%'
  },
  roundButton3: {
    width: 41,
    height: 41,
    borderRadius: 41,
    marginTop: "45%",
    backgroundColor: '#F8C018',
    alignSelf: 'flex-end',
    marginRight: '5%'
  },
  icon: {
    alignSelf: 'center',
    marginTop: 5
  },
  openLead: {
    width: '45%',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#0055FF',
    justifyContent: 'center',
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
    padding: '2%',
    marginBottom: 10
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2%',
    marginTop: -10,
    paddingBottom: -5
  },
  no: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 15
  },
  typeTitle: {
    color: 'white',
    fontSize: 18,
    width: '45%',
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: '5%'
  },
  wonLead: {
    width: '45%',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#19CB37',
    justifyContent: 'center',
    alignContent: 'center'
  },
  lostLead: {
    width: '45%',
    height: 130,
    borderRadius: 10,
    backgroundColor: '#F62727',
    justifyContent: 'center',
    alignContent: 'center'
  },
})

