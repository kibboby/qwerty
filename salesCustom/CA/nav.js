import firebase from '@react-native-firebase/app';
import * as React from 'react';
import { StyleSheet, View } from "react-native";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

import accountCA from './accountCA.js';
import salespersonAccount from './AccountSalesperson_CA.js';
import changePassword from './changePassword.js';
import dashboardCA from './dashboardCA.js';
import editLeadsDetail from './EditleadsDetail.js';
import editProfileCA from './editProfile_CA.js';
import editSalespersonProfile from './editProfileSalesperson.js';
import history from './history.js';

import OverdueTask from './OverdueTask.js';
import CallTask from './CallTask.js';
import AppointmentTask from './AppointmentTask.js';
import OtherTask from './OtherTask.js';

import leadsTask from './leadsTask.js';
import leadsDetailLost from './leadsDetailLost.js';
import leadsDetailMain from './leadsDetailsMain.js';
import leadsDetailWon from './leadsDetailWon.js';
import lostLeadsReport from './lostLeadsReport_CA.js';
import notification from './notificationPage.js'
import notificationSettings from './notificationSetting.js';
import openLeads from './openLeads_CA.js';
import OverallReport from './OverallReport_CA.js';
import salespersonReport from './salespersonReport.js';
import performanceReportCA from './performanceReport_CA.js';
import salespersonRegister from './registerSalesperson.js';
import remark from './remark.js';
import settings from './settings.js';
import taskMainCA from './taskMain_CA.js';
import upcomingTaskDetail from './upcomingTaskDetail.js';
import wonLeadsReport from './wonLeadsReport_CA.js';


const BottomTab = createBottomTabNavigator();
const dashboardStack = createStackNavigator();
const ReportStack = createStackNavigator();
const taskStack = createStackNavigator();
const AccountStack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();


export const LoginNavigator= () =>{
 
  return(
    <Tab.Navigator
    initialRouteName="Login"
    tabBarOptions={{
      activeTintColor:orange,
      style: { backgroundColor: 'black' }
    }}
  >
    <Tab.Screen
      name="Login"
      component={LoginStackNav}
      options={{tabBarVisible:false}}
    />
  </Tab.Navigator>
  )

}


const leadsTopTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="detail"
      tabBarOptions={{
        activeTintColor: '#F8C018',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          position: 'absolute',
          top: 45,
          left: 110,
          right: 0,
          width: '50%',
          alignSelf: 'center'
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >

      <TopTab.Screen
        name="detail"
        component={leadsDetailMain}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="task"
        component={leadsTask}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />

    </TopTab.Navigator>
  )
}

const TaskandHistoryTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="task"
      tabBarOptions={{
        activeTintColor: '#F8C018',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          position: 'absolute',
          top: 45,
          left: 110,
          right: 0,
          width: '50%',
          alignSelf: 'center'
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >

      <TopTab.Screen
        name="task"
        component={TaskMainStackNav}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="history"
        component={TaskHistoryNav}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
    </TopTab.Navigator>
  )
}

const OverallReportTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="overall"
      tabBarOptions={{
        activeTintColor: '#F8C018',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          position: 'absolute',
          top: 45,
          left: 110,
          right: 0,
          width: '50%',
          alignSelf: 'center'
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >

      <TopTab.Screen
        name="overall"
        component={OverallReport}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="salespersonReport"
        component={salespersonReport}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
    </TopTab.Navigator>
  )
}

const leadsStatusTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Open"
      tabBarOptions={{
        activeTintColor: '#F8C018',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          position: 'absolute',
          top: 45,
          left: 110,
          right: 0,
          width: '50%',
          alignSelf: 'center'
        },
        indicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >

      <TopTab.Screen
        name="Open"
        component={openLeads}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Won"
        component={wonLeadsReport}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />

      <TopTab.Screen
        name="Lost"
        component={lostLeadsReport}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />

    </TopTab.Navigator>
  )
}


const SalespersonTopTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: '#F8C018',
        inactiveTintColor: 'white',
        swipeEnabled: true,
        style: {
          backgroundColor: 'black',
          borderColor: 'black',
          position: 'absolute',
          top: 45,
          left: 110,
          right: 0,
          width: '50%',
          alignSelf: 'center'
        },
        indicatorStyle: {
          backgroundColor: '#fff',
        },
      }}
    >

      <TopTab.Screen
        name="Profile"
        component={salespersonAccount}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Performance Report"
        component={performanceReportCA}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />

    </TopTab.Navigator>
  )
}



const BottomTabNav = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#F8C018',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: 'black',
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={dashboardStackNav}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Icon4 name="home" color={color} size={26} focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Task"
          component={TaskandHistoryTab}
          options={{
            tabBarLabel: 'Task',
            tabBarIcon: ({ color, focused }) => (
              <Icon4 name="briefcase" color={color} size={26} focused={focused} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Report"
          component={ReportStackNav}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, focused }) => (
              <Icon4 name="chart-pie" color={color} size={26} focused={focused} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Account"
          component={AccountStackNav}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, focused }) => (
              <Icon4 name="account" color={color} size={26} focused={focused} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

function dashboardStackNav() {
  return (
    <dashboardStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <dashboardStack.Screen name="dashboard" component={dashboardCA} />
      <dashboardStack.Screen name="notification" component={notification} />
      <dashboardStack.Screen name="edit leads" component={editLeadsDetail} />
      <dashboardStack.Screen name="remark" component={remark} />
      <dashboardStack.Screen name="leadTop" component={leadsTopTab} />
    </dashboardStack.Navigator>

  )
}

function TaskHistoryNav() {
  return (
    <taskStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <taskStack.Screen name="historyMain" component={history} />
      <taskStack.Screen name="Call" component={CallTask} />
      <taskStack.Screen name="Appointment" component={AppointmentTask} />
      <taskStack.Screen name="Others" component={OtherTask} />
      <taskStack.Screen name="lead task" component={leadsTask} />
    </taskStack.Navigator>
  )
}

function TaskMainStackNav() {
  return (
    <taskStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <taskStack.Screen name="main" component={taskMainCA} />
      <taskStack.Screen name="Overdue" component={OverdueTask} />
      <taskStack.Screen name="Call" component={CallTask} />
      <taskStack.Screen name="Appointment" component={AppointmentTask} />
      <taskStack.Screen name="Others" component={OtherTask} />
      <taskStack.Screen name="lead task" component={leadsTask} />
    </taskStack.Navigator>
  )
}

function ReportStackNav() {
  return (
    <ReportStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ReportStack.Screen name="overall" component={OverallReportTab} />
      <ReportStack.Screen name="leadsStatus" component={leadsStatusTab} />
      <ReportStack.Screen name="salesperson" component={SalespersonTopTab} />
      <ReportStack.Screen name="leadTop" component={leadsTopTab} />
      <ReportStack.Screen name="edit salesperson profile" component={editSalespersonProfile} />
    </ReportStack.Navigator>
  )
}



function AccountStackNav() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <AccountStack.Screen name="Account" component={accountCA} />
      <AccountStack.Screen name="settings" component={settings} />
      <AccountStack.Screen name="changePassword" component={changePassword} />
      <AccountStack.Screen name="edit CA profile" component={editProfileCA} />
      <AccountStack.Screen name="notification settings" component={notificationSettings} />
    </AccountStack.Navigator>
  )
}

export default BottomTabNav;

