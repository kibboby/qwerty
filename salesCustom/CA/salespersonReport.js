import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView, TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/SimpleLineIcons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./img/backgroundImg.png')}
          style={styles.backgroundImage}>
          <Text style={styles.text}>Report</Text>

          <ScrollView style={styles.bckground}>
            <Text style={styles.subTitle}>Per Salesperson Performance</Text>
              <TouchableOpacity style={styles.salesNameBox}
              onPress={() => this.props.navigation.navigate('TopNav3')}>
                <View style={{
                  width: '20%', backgroundColor: 'black', height: '90%',
                  marginLeft: '5%', marginTop: 5, marginBottom: 5
                }} />
                <View style={{
                  width: 34, height: 34, borderRadius: 34,
                  backgroundColor: 'black', marginLeft: '5%', marginTop: 10, marginBottom: 10
                }}></View>
                <View style={styles.companyName}>
                  <Text >Siti Nur Aliah</Text>
                  <Text numberOfLines={1} style={styles.compName2}>Google.co</Text>
                </View>
                <Icon2 name="arrow-right" size={15} color="black" />
              </TouchableOpacity>
            </ScrollView>

          <TouchableOpacity style={styles.roundButton3} >
            <Icon name="filter" size={30} color="black" style={styles.icon} />
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
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
    height: "70%",
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    marginTop: '13%'
  },
  subTitle: {
    fontSize: 18,
    color: '#F8C018',
    textAlign: 'center',
    marginTop: '3%',
    marginBottom: '5%'
  },
  roundButton3: {
    width: 41,
    height: 41,
    borderRadius: 41,
    marginTop: "11%",
    backgroundColor: '#F8C018',
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginBottom: '6%'
  },
  icon: {
    alignSelf: 'center',
    marginTop: 5
  },
  salesNameBox: {
    width: '85%',
    paddingLeft: 5,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  companyName: {
    marginLeft: '5%',
    fontSize: 16,
    width: '44%'
  },
  compName2: {
    color: '#B56118',
  }
})
