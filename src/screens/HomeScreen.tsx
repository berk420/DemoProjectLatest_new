import { Button, Text, TextInput, View,StyleSheet,ScrollView,FlatList,RefreshControl, TouchableOpacity, BackHandler, Alert } from "react-native";
import axios,{AxiosResponse} from "axios";
import {useCallback, useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stacktype } from "../../App";
import { createDrawerNavigator } from '@react-navigation/drawer';
import route from "./LoginScreen";
import { useBackHandler } from '@react-native-community/hooks';
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import { tabbartype } from "../../Tabbarroot";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


type HomeScreenProps = NativeStackScreenProps<tabbartype, 'Home'>;

const HomeScreen = ({route,navigation}: HomeScreenProps) => {
  const[sayı,setsayı]=useState(1);
  const{userEmail, setUserEmailText} = useAppContext();
  const{userid,setUserIdText}=useAppContext();
  const{theme, setThemeText}=useAppContext();
  const {t} = useTranslation();
  const[time,settime]=useState(0.0);
  const [refreshing, setRefreshing] =useState(false);

  const onRefresh = useCallback(() => {
    let startTime = performance.now()
    setTimeout(() => {
      setsayı(0);
    }, 1000);
    let endTime = performance.now()
    settime(endTime - startTime);
    console.log(`Call to doSomething took ${endTime - startTime} milliseconds.`);
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, endTime - startTime);
 }, []);
  

  const refreshHandler = () => {
    console.log("Refresh");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }
  useBackHandler(() => {
    // Geri düğmesine basıldığında uygulamadan çıkın
    BackHandler.exitApp();
    return true;
  });
    
  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={{paddingVertical:100}}
    refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={refreshHandler} />}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Text style={theme=="dark" ? styles.darkText: styles.whiteText}>Hello</Text>
          
          <Button
            title="Go to Detail"
            onPress={() => navigation.navigate('Detail')}/>

          <Text>-------------------------------------</Text>
          <Text>{t("wiserSenseLocalization.Language")}</Text>
          <Text>-------------------------------------</Text>

          <Text style={{ fontSize: 20 }}>{sayı}</Text>
          <Button
            title="Arttır"
            onPress={() =>setsayı(sayı+1)}
          />
          <Text>-------------------------------------</Text>


        </View>
          <View style={styles.container}>
            <Text>Details Screen</Text>
            <View style={ {flex: 1,alignItems: 'center', justifyContent: 'center'}}>
              <Text>store dan geliyor</Text>      
              <Text>name:{userEmail}</Text>
              <Text>id:{userid}</Text>

              <Text>--------------------------</Text>
            </View>
          </View>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  languageSelector: {
      display: 'flex',
      alignItems: 'flex-end',

  },
  whiteText:{
    color:'#FFFFFF'
  },
  darkText:{
    color:'#000000'
  },
  languageText: {
      fontWeight: 'bold'
  },
  formContainer: {
      display: 'flex',
      padding: 10,

  },
  entryField: {
      height: 40,
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      borderRadius: 10,

  },
  forgotSection: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 10
  },
  loginContainer: {


  },
  text: {
      textAlign: 'center',
      fontSize: 18

  },

  checkboxField: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  }
})
