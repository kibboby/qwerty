import * as React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';

import accountCA from './android/CA/accountCA.js';
import salespersonAccount from './android/CA/AccountSalesperson_CA.js';
import changePassword from './android/CA/changePassword.js';
import dashboardCA from './android/CA/dashboardCA.js';
import editLeadsDetail from './android/CA/EditleadsDetail.js';
import editProfileCA from './android/CA/editProfile_CA.js';
import editSalespersonProfile from './android/CA/editProfileSalesperson.js';
import history from './android/CA/history.js';
import leadsTask from './android/CA/leadsTask.js';
import leadsDetailLost from './android/CA/leadsDetailLost.js';
import leadsDetailMain from './android/CA/leadsDetailsMain.js';
import leadsDetailWon from './android/CA/leadsDetailWon.js';
import lostLeadsReport from './android/CA/lostLeadsReport_CA.js';
import notification from './android/CA/notificationPage.js'
import notificationSettings from './android/CA/notificationSetting.js';
import openLeads from './android/CA/openLeads_CA.js';
import OverallReport from './android/CA/OverallReport_CA.js';
import salespersonReport from './android/CA/salespersonReport.js';
import performanceReportCA from './android/CA/performanceReport_CA.js';
import salespersonRegister from './android/CA/registerSalesperson.js';
import remark from './android/CA/remark.js';
import settings from './android/CA/settings.js';
import taskMainCA from './android/CA/taskMain_CA.js';
import upcomingTaskDetail from './android/CA/upcomingTaskDetail.js';
import wonLeadsReport from './android/CA/wonLeadsReport_CA.js';


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
          backgroundColor: 'black',
          borderColor: 'black',
          position: 'absolute',
          top: 45,
          left: 145,
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
          backgroundColor: 'black',
          borderColor: 'black',
          position: 'absolute',
          top: 45,
          left: 145,
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
        name="task"
        component={taskMainCA}
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
        component={history}
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
          backgroundColor: 'black',
          borderColor: 'black',
          position: 'absolute',
          top: 45,
          left: 145,
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
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, focused }) => (
              <Icon name="home" color={color} size={26} focused={focused} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Task"
          component={TaskStackNav}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, focused }) => (
              <Icon3 name="task" color={color} size={26} focused={focused} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Report"
          component={ReportStackNav}
          options={{
            tabBarLabel: 'Report',
            tabBarIcon: ({ color, focused }) => (
              <Icon name="piechart" color={color} size={26} focused={focused} />
            ),
          }}
        />

        <BottomTab.Screen
          name="Account"
          component={AccountStackNav}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color, focused }) => (
              <Icon2 name="user" color={color} size={26} focused={focused} />
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

function TaskStackNav() {
  return (
    <taskStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <taskStack.Screen name="TaskandHistoryTop" component={TaskandHistoryTab} />
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

