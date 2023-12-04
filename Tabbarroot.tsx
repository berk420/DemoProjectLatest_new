
// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text ,Image, StyleSheet, Linking} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotScreen from './src/screens/ForgotScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import MyProfileScreen from './src/screens/MyProfileScreen';
//import DrawerScreen from './src/screens/DrawerScreen';
import { DrawerContent, DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';
import { User } from './interfaces';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WiserContextProvider } from './src/context/AppContext';
import './src/locales/index'

export type tabbartype={
  Home:undefined,
  Detail:undefined,
  MyProfile:undefined,
  Tabbarroot:undefined,
}
//tab bar'ın içinden de drawer açılacak oyüzden  buraya drawer da konulabilir

const Tab = createBottomTabNavigator<tabbartype>();

function Tabbarroot() {
  return (
    <WiserContextProvider>
        <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="MyProfile" component={MyProfileScreen}
                options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerShown: false,
                tabBarVisible: false,
                headerTitle: "myprofile Screen",
                headerStyle: {
                    backgroundColor: '#808080',
                }})}/>
        <Tab.Screen name="Home" component={HomeScreen}
                options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerShown: false,
                tabBarVisible: false,
                headerTitle: "home Screen",
                headerStyle: {
                backgroundColor: '#808080',
                }})}/>
        <Tab.Screen name="Detail" component={DetailScreen}
                options={({ navigation, route }) => ({
                headerBackTitleVisible: false,
                headerShown: false,
                tabBarVisible: false,
                headerTitle: "detail Screen",
                headerStyle: {
                  backgroundColor: '#808080',
                }})}/>
        </Tab.Navigator>
      </WiserContextProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  
  labelContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
  },
});

export default Tabbarroot;

