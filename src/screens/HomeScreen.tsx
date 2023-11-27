import { Button, Text, TextInput, View,StyleSheet,FlatList, TouchableOpacity, BackHandler } from "react-native";
import axios,{AxiosResponse} from "axios";
import {useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { createDrawerNavigator } from '@react-navigation/drawer';
import route from "./LoginScreen";
import { useBackHandler } from '@react-native-community/hooks';
import UserProvider,{ User, WiserContext} from "../context/ApplicationContext";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({route,navigation}: HomeScreenProps) => {
  console.log("Home Screen çalıştı");
  const { user_data,all_user_data } = route.params;


  const{user,setUser} =useContext(WiserContext);


  useBackHandler(() => {
    // Geri düğmesine basıldığında uygulamadan çıkın
    BackHandler.exitApp();
    return true;
  });

  const handleEmailClick = (email,id) => {
    
    navigation.navigate('Detail',{user_mail:email,user_id:id});

  };

  return (
    <View style={styles.container}>
    <View style={styles.container}>
        <Text>Home Screen</Text>


        <Button
          title="Go to Detail"
        /> 
      <Text>{user.name}</Text>

     <Text>-------------------------------------</Text>
     </View>

     <View style={styles.container}>

      <Text>Details Screen</Text>
      <View style={ {flex: 1,alignItems: 'center', justifyContent: 'center' ,flexDirection: 'row'}}>


      <View style={ {flex: 1,alignItems:'flex-start', justifyContent: 'center'}}>

    <FlatList
        data={all_user_data}
        renderItem={({item}) => <TouchableOpacity onPress={() => handleEmailClick(item.email,item.id)}>
        <Text style={styles.item}>{item.email}</Text>

      </TouchableOpacity>}
      />
      </View>

      <View style={ {flex: 1,alignItems: 'center', justifyContent: 'center'}}>
      <Text>Name: {user_data.name}</Text>
      <Text>Username: {user_data.username}</Text>
      <Text>Email: {user_data.email}</Text>
      </View>
      </View>
      </View>
      </View>
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
