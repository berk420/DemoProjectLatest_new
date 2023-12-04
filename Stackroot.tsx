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
import Tabbarroot from './Tabbarroot';

export type stacktype = {
  ForgotScreen: undefined,
  LoginScreen:undefined,
  Stackroot:undefined,
  Tabbarroot:undefined,
}
//Stack'in içinden tabbar'ın açacağımız için stacktype'a tab bar'ı da tanımlamamız gerekiyor
const Stack = createNativeStackNavigator<stacktype>();

function Stackroot() {
  return (
    <WiserContextProvider>
      <Stack.Navigator initialRouteName='LoginScreen'>
         <Stack.Screen name="LoginScreen" component={LoginScreen} 
            options={({ navigation, route }) => ({
            headerBackTitleVisible: false,
            headerShown: false,
            tabBarVisible: false,
            headerTitle: "Login Screen",
            headerStyle: {
              backgroundColor: '#808080',
            }})}/>

          <Stack.Screen name="ForgotScreen" component={ForgotScreen}
            options={({ navigation, route }) => ({
            headerShown: false,
            tabBarVisible: false,
            headerBackTitleVisible: false,
            headerTitle: "Forgot Password Screen",
            headerStyle: {
              backgroundColor: '#808080',
            }})}/>
      
       </Stack.Navigator>
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

export default Stackroot;


