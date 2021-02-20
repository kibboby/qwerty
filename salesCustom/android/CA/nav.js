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
import leadsDetailLost from './android/CA/leadsDetailLost.js';
import leadsDetailMain from './android/CA/leadsDetailsMain.js';
import leadsDetailWon from './android/CA/leadsDetailWon.js';
import lostLeadsReport from './android/CA/lostLeadsReport_CA.js';
import notification from './android/CA/notificationPage.js'
import notificationSettings from './android/CA/notificationSetting.js';
import openLeads from './android/CA/openLeads_CA.js';
import OverallReport from './android/CA/OverallReport_CA.js';
import performanceReportCA from './android/CA/performanceReport_CA.js';
import salespersonRegister from './android/CA/registerSalesperson.js';
import remark from './android/CA/remark.js';
import settings from './android/CA/settings.js';
import taskMainCA from './android/CA/taskMain_CA.js';
import upcomingTaskDetail from './android/CA/upcomingTaskDetail.js';
import wonLeadsReport from './android/CA/wonLeadsReport_CA.js';


const BottomTab = createBottomTabNavigator();
const ReportStack = createStackNavigator();
const AccountStack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

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
        component={SalespersonProfile}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <View>
              <Icon3 name="circle" color={color} size={11} focused={focused} />
            </View>
          )
        }}
      />
      <TopTab.Screen
        name="Overall"
        component={OverallReport_Salesperon}
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

const SalespersonReportTopTab = () => {
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
        component={OpenLead_Salesperson}
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
        component={WonLead_Salesperson}
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
        component={LostLead_Salesperson}
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

const CompanyTopTab = () => {
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
        component={OpenLead_Company}
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
        component={WonLead_Company}
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
        component={LostLead_Company}
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

const OverallReportTopTab = () => {
  return (
    <TopTab.Navigator
      initialRouteName="Overall"
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
        name="Overall"
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
        name="Company"
        component={salesper}
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
        initialRouteName="Report"
        tabBarOptions={{
          activeTintColor: '#F8C018',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: 'black',
          },
        }}
      >
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
              <Icon2 name="circle" color={color} size={26} focused={focused} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

function ReportStackNav() {
  return (
    <ReportStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <ReportStack.Screen name="TopNav1" component={OverallReportTopTab} />
      <ReportStack.Screen name="TopNav2" component={CompanyTopTab} />
      <ReportStack.Screen name="TopNav3" component={SalespersonTopTab} />
      <ReportStack.Screen name="TopNav4" component={SalespersonReportTopTab} />
      <ReportStack.Screen name="Company Report" component={PerCompanyReport} />
      <ReportStack.Screen name="CA Profile" component={CompanyAdminProfile} />
      <ReportStack.Screen name="Lead Profle" component={LeadProfile} />
    </ReportStack.Navigator>
  )
}

function AccountStackNav() {
  return (
    <AccountStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <AccountStack.Screen name="Account" component={Profile} />
    </AccountStack.Navigator>
  )
}

export default BottomTabNav;

