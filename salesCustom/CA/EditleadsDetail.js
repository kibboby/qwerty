import { StatusBar } from 'expo-status-bar';
import React, {Component, useState } from 'react';
//import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView, ScrollView, FlatList, ImageBackground } from 'react-native';
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
        <ImageBackground source={require('./img/backgroundImg.png')}
          style={styles.backgroundImage}>


          <Text style={styles.title}>Edit LEAD'S DETAIL</Text>

          <Card  style={styles.cardBorder}>
          <View style={styles.row}>
            <Text style={styles.details}>Name</Text>
            <Text style={styles.info}>John Doe</Text>
          </View>
          </Card>

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

        <View>
          <Text style={styles.title2}>Change Salesperson in Charge</Text>
        </View>
          <Card style={styles.cardBorder}>
          <View style={{ borderTopColor: 'black', borderTopWidth: 1, }}>
            <Text style={styles.buttoncontent}>Please Select Salesperson</Text>
          </View>
          </Card>

        <View style={styles.container2}>
        <View style={styles.ButtonView}>
            <TouchableOpacity
                style={styles.Button}
                //onPress={this._onPressLoginButton}
                //disabled={!this.state.isFormValid}
                //onPress={this. _onPressCancelChangePswButton}
                // onPress={pressSave}
            >
                <Text style={styles.ButtonContent}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.Button}
                //onPress={this._onPressLoginButton}
                //disabled={!this.state.isFormValid}
                // onPress={this._onPressChangePswButton}
                // onPress={pressCancel}
            >
                <Text style={styles.ButtonContent}>Cancel</Text>
            </TouchableOpacity>


        </View>
        </View>
      <StatusBar style="auto" />
      </ImageBackground>
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

  backgroundImage: {
    flex: 1,
    resizeMode: "cover"
  },

  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
    justifyContent: 'flex-start',
    paddingTop:"20%",
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

    
  ButtonView: {
    width: '100%',
    backgroundColor:"white",
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems:"stretch",
    borderWidth:2,
    borderColor:"lightgrey",
    //justifyContent: 'space-around',
    //backgroundColor:"black",
    },
  
  Button:{
    borderWidth:3,
    //borderColor:"lightgrey",
    // backgroundColor:'black',
    padding: 10,
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderBottomColor: '#fff',
    borderRightColor: 'lightgrey',
    width:"50%",
    // borderRadius:5,
    },
  
  ButtonContent:{
    textAlign:'center',
    color:"orange",
    // fontWeight:'bold',
    },

});
