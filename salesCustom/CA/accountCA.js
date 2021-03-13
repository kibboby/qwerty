import { StatusBar } from 'expo-status-bar';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useEffect, useState, Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button ,TouchableOpacity, ImageBackground,Image} from 'react-native';
import {auth, db} from './firebase';
import { orange } from './TablesandTimeFormat';



//export default function App() {
export default ({navigation, route}) => {


  const [showProfileUsername, setshowProfileUsername]=useState("")
  const [showProfileNickname, setshowProfileNickname]=useState("")
  const [showUserPhone, setshowUserPhone]=useState("")
  const [showUserEmail, setshowUserEmail]=useState("")
  const [showUserRole, setshowUserRole]=useState("")

  
  useEffect(() => {
    var user=auth.currentUser
    console.log(user.uid)
    if(user){
      db.collection("users").where("UID", "==","HiVB7rApJqMSbGfLTPEbtVVdvXc2")
      .get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log(doc.id, " => ", doc.data());
              setshowProfileUsername(doc.data().name)
              setshowProfileNickname(doc.data().nickname)
              setshowUserPhone(doc.data().phoneNumber)
              setshowUserEmail(doc.data().email)
              setshowUserRole(doc.data().role)
          });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
}
   
}, []);


  const pressOpenMenu=()=>{
    alert('nav to ProfileSetting .js');
    navigation.navigate('Settings');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./img/backgroundImg.png')}  style={styles.bgimage}>
      {/* <View>
      <Text style={styles.title}>Profile</Text>
      </View> */}
    <View style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft:50,marginRight:50, marginTop:20, paddingBottom:50, borderRadius:10}}>
      {/* <View style={styles.diamondborder}> */}
        <View style={styles.squareborder}>
        <Image source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbiZWccEy7BaDQdfouPsE-0-9JUiDyTxMQg&usqp=CAU"}} style={styles.image}/>
        </View>
      {/* </View> */}

      <View style={styles.UsernameContainer}>
        <Text style={styles.titleUsername}>{showProfileUsername}</Text>
        <Text style={styles.usersmallname}>{showProfileNickname}</Text>
      </View>
      
      <View style={styles.userinfoContainer}>

      <View>

      <View style={styles.flexrow}>
           <Icon name='call' size={30} color={orange}/> 
           <View style={styles.userinfo}>
           <Text style={styles.userdata}>{showUserPhone}</Text>
           </View>
      </View>

      <View style={styles.flexrow}>
           <Icon name='email' size={30} color={orange} /> 
           <View style={styles.userinfo}>
           <Text style={styles.userdata}>{showUserEmail}</Text>
           </View>
      </View>

      <View style={styles.flexrow}>
           <Icon name='domain' size={30} color={orange} /> 
           <View style={styles.userinfo}>
           <Text style={styles.userdata}>{showUserRole}</Text>
           </View>
      </View>

      </View>

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
    alignItems:"center",
    justifyContent: 'center',
    // padding:"20%",
  },

  title:{
    fontWeight:"bold",
    alignSelf:"center",
    fontSize:20,
    color:"black",
    alignItems:"center",
  },

  // diamondborder: {
  //   alignSelf:"center",
  //   marginTop:50,
  //   //padding:5,
  //   width: 150,
  //   height: 150,
  //   borderWidth:1,
  //   borderColor: orange,
  //   alignItems:"center",
  //   transform: [{ rotate: "45deg" }],
  // },

  squareborder:{
    borderWidth:1,
    alignSelf:'center',
    borderColor:orange,
    padding:5,
    marginTop:50,
    width:140,
    height:140,
    alignItems:"center",
    // transform: [{ rotate: "-45deg" }],
  },
  
  image:{
    width: 123,
    height: 123,
    borderRadius:10,
  },

  UsernameContainer:{
    alignItems:"center",
  },

  titleUsername:{
    marginTop:5,
    fontWeight:"bold",
    fontSize:28,
    color:orange,
    alignItems:"flex-start",
  },

  usersmallname:{
    marginTop:5,
    fontWeight:"bold",
    fontSize:16,
    color:"white",
    //alignItems:"center",
  },

  userinfoContainer:{
    padding:10,
    borderWidth:2,
    borderRadius:20,
    borderColor:"grey",
    backgroundColor:"white",
    // opacity:"100%",
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
    marginTop:20,
    alignItems:"center",
    width:250,
    height:150,
    alignSelf:"center"

  },

  flexrow:{
    marginTop:10,
    // alignSelf:"center",
    flexDirection:"row",
    // justifyContent:"space-around"
  },

  userinfo:{
     marginLeft:10,
     alignSelf:"center"
    //textAlign:"center",
    // justifyContent:"center",
    // flex:1,
  },

  userdata:{
    fontWeight:'bold',
    color:"black"
  },

  settingiconView:{
    alignItems:"center",
    padding:5
  },

  settingicon:{
    position:"absolute",
    //top:15,
    right:5,
  },

  bgimage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    justifyContent: "flex-start"
  },


});
