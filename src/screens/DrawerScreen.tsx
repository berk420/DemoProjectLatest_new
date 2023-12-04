import { Button, Text, View } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';

import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stacktype } from "../../App";
import MyProfile from './MyProfileScreen';
import MyProfileScreen from "./MyProfileScreen";


type drawertype={
  MyProfile:undefined

}

const Drawer = createDrawerNavigator<drawertype>();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="MyProfile" component={MyProfileScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerScreen

