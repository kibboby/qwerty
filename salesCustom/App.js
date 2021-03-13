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

import accountCA from './CA/accountCA.js';
import salespersonAccount from './CA/AccountSalesperson_CA.js';
import changePassword from './CA/changePassword.js';
import dashboardCA from './CA/dashboardCA.js';
import editLeadsDetail from './CA/EditleadsDetail.js';
import editProfileCA from './CA/editProfile_CA.js';
import editSalespersonProfile from './CA/editProfileSalesperson.js';
import history from './CA/history.js';

import OverdueTask from './CA/OverdueTask.js';
import CallTask from './CA/CallTask.js';
import AppointmentTask from './CA/AppointmentTask.js';
import OtherTask from './CA/OtherTask.js';

import leadsTask from './CA/leadsTask.js';
import leadsDetailLost from './CA/leadsDetailLost.js';
import leadsDetailMain from './CA/leadsDetailsMain.js';
import leadsDetailWon from './CA/leadsDetailWon.js';
import lostLeadsReport from './CA/lostLeadsReport_CA.js';
import notification from './CA/notificationPage.js'
import notificationSettings from './CA/notificationSetting.js';
import openLeads from './CA/openLeads_CA.js';
import OverallReport from './CA/OverallReport_CA.js';
import salespersonReport from './CA/salespersonReport.js';
import performanceReportCA from './CA/performanceReport_CA.js';
import salespersonRegister from './CA/registerSalesperson.js';
import remark from './CA/remark.js';
import settings from './CA/settings.js';
import taskMainCA from './CA/taskMain_CA.js';
import upcomingTaskDetail from './CA/upcomingTaskDetail.js';
import wonLeadsReport from './CA/wonLeadsReport_CA.js';


const BottomTab = createBottomTabNavigator();
const dashboardStack = createStackNavigator();
const ReportStack = createStackNavigator();
const taskStack = createStackNavigator();
const AccountStack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();



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

const TaskMainTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="taskMainTab"
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
        name="Overdue"
        component={OverdueTask}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Call"
        component={CallTask}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Appointment"
        component={AppointmentTask}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Others"
        component={OtherTask}
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
      <taskStack.Screen name="taskMainTab" component={TaskMainTab} />
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
      <taskStack.Screen name="taskMainTab" component={TaskMainTab} />
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

