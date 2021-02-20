import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/Ionicons';

export default class App extends Component {
    render() {
      return (
        <View style={styles.container}>
          {/* <ImageBackground source={require('./backgroundImg.png')}
            style={styles.backgroundImage}> */}
            <Text style={styles.text}>Report</Text>
            <View style={styles.nav}>
              <TouchableOpacity style={styles.roundButton} />
              <TouchableOpacity style={styles.roundButton2} />
              <TouchableOpacity style={styles.roundButton2} />
            </View>
  
            <TouchableOpacity style={styles.bckground}>
              <View style={{ position: 'absolute', width: "100%", }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={styles.custNameBox}>
                    <Text numberOfLines={2} style={styles.custName}>John David</Text>
                  </View>
  
                  <View style={styles.leadStatus}>
                    <Text style={styles.status}>Won</Text>
                  </View>
                </View>
  
                <View style={styles.mainInfo}>
                  <View style={styles.align}>
                    <Icon name="call" size={35} color="#F8C018" />
                    <Text style={styles.info}>010 222 3334</Text>
                  </View>
                  <View style={styles.align}>
                    <Icon name="email" size={35} color="#F8C018" />
                    <Text style={styles.info}>nrozunan@gmail.com</Text>
                  </View>
                  <View style={styles.align}>
                    <Icon name="work" size={35} color="#F8C018" />
                    <Text style={styles.info}>Google Co.</Text>
                  </View>
                  <View style={styles.align}>
                    <Icon name="circle" size={35} color="#F8C018" />
                    <Text style={styles.info}>Siti Nur Aliah</Text>
                  </View>
                </View>
  
                <View style={styles.secondInfo}>
                  <View style={styles.align}>
                    <Icon name="search" size={35} color="#F8C018" />
                    <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                      <Text style={styles.topicInfo}>Interest</Text>
                      <Text style={styles.info2}>010 222 3334</Text>
                    </View>
                  </View>
                  <View style={styles.align}>
                    <Icon name="comment" size={35} color="#F8C018" />
                    <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                      <Text style={styles.topicInfo}>Comment</Text>
                      <Text style={styles.info2}>-</Text>
                    </View>
                  </View>
                  <View style={styles.align}>
                    <Icon name="contacts" size={35} color="#F8C018" />
                    <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                      <Text style={styles.topicInfo}>Status</Text>
                      <Text style={styles.info2}>Contacted</Text>
                    </View>
                  </View>
                  <View style={styles.align}>
                    <Icon name="attach-money" size={35} color="#F8C018" />
                    <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                      <Text style={styles.topicInfo}>Quote Sent</Text>
                      <Text style={styles.info2}>RM1200</Text>
                    </View>
                  </View>
                  <View style={styles.align}>
                    <Icon name="attach-money" size={35} color="#F8C018" />
                    <View style={{ flexDirection: 'column', marginLeft: '4%' }}>
                      <Text style={styles.topicInfo}>Quote Agreed</Text>
                      <Text style={styles.info2}>RM1200</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
  
            <View style={{ flexDirection: 'row', alignSelf: 'flex-end',marginRight: '8%'}}>
              <TouchableOpacity style={styles.roundButton3} >
                <Icon name="edit" size={30} color="black" style={styles.icon} />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.roundButton3} >
                <Icon3 name="call-outline" size={30} color="black" style={styles.icon} />
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.roundButton3} >
                <Icon2 name="email-outline" size={30} color="black" style={styles.icon} />
              </TouchableOpacity>
            </View>
          {/* </ImageBackground> */}

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
    nav: {
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: "center",
      maxHeight: 11,
      marginTop: '5%',
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
    roundButton: {
      width: 11,
      height: 11,
      borderRadius: 11,
      margin: "4%",
      backgroundColor: '#F8C018',
      alignSelf: 'center',
    },
    roundButton2: {
      width: 11,
      height: 11,
      borderRadius: 11,
      margin: "4%",
      backgroundColor: 'white',
      alignSelf: 'center'
    },
    bckground: {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      width: "80%",
      height: "78%",
      alignSelf: 'center',
      margin: '5%',
      borderRadius: 10
    },
    custNameBox: {
      backgroundColor: '#F8C018',
      alignSelf: 'flex-start',
      padding: "4%",
      borderRadius: 10,
      marginLeft: "10%",
      marginRight: "5%",
      marginTop: "6%",
      zIndex: 1
    },
    custName: {
      color: '#000000',
      fontWeight: 'bold',
      fontSize: 20
    },
    leadStatus: {
      width: 98,
      height: 98,
      borderRadius: 98,
      backgroundColor: "limegreen",
      alignSelf: 'flex-end',
      marginEnd: '3%',
      marginTop: '1%',
      justifyContent: 'center',
      zIndex: 1
    },
    status: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    mainInfo: {
      width: "90%",
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 10,
      zIndex: 0,
      marginTop: -45,
      position: 'relative',
      paddingTop: '8%',
      paddingLeft: '8%'
    },
    align: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '4%'
    },
    info: {
      fontSize: 17,
      marginLeft: '7%'
    },
    secondInfo: {
      width: "90%",
      backgroundColor: 'white',
      alignSelf: 'center',
      borderRadius: 10,
      zIndex: 0,
      marginTop: "5%",
      position: 'relative',
      paddingTop: '4%',
      paddingLeft: '8%'
    },
    topicInfo: {
      fontSize: 16,
      marginLeft: '7%',
      color: '#B56118'
    },
    info2: {
      fontSize: 16,
      marginLeft: '7%'
    },
    roundButton3: {
      width: 41,
      height: 41,
      borderRadius: 41,
      marginTop: "3%",
      marginRight: '2%',
      backgroundColor: '#F8C018',
    },
    icon: {
      alignSelf: 'center',
      marginTop: 5
    }
  })
  