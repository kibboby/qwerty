//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import Login from './final/login.js';
// import Forgot from './final/Forgot';
import CAPage from './final/CA/stackNavigation_CA.js';
import SLPage from './final/SL/stackNavigation_SL.js';
import SAPage from './final/SA/stackNavigation_SA.js';
import ressetpsw from './final/ressetpsw.js';
//import all the screens we are going to switch 
const App = createStackNavigator({
  
  //Constant which holds all the screens like index of any book 
    // Login: { screen: Login }, 
    //First entry by default be our first screen if we do not define initialRouteName
    SLPage: { screen: SLPage}, 
    CAPage: { screen: CAPage}, 
    SAPage: { screen: SAPage}, 
    // Forgot: { screen: Forgot},
    ressetpsw: {screen: ressetpsw},
  },
  {

    headerMode: 'none',
  }
);
export default createAppContainer(App);