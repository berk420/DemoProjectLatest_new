import { Button, Text, TextInput, View,StyleSheet,FlatList, TouchableOpacity, BackHandler } from "react-native";
import axios,{AxiosResponse} from "axios";
import {useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { createDrawerNavigator } from '@react-navigation/drawer';
import route from "./LoginScreen";
import { useBackHandler } from '@react-native-community/hooks';
import { useAppContext } from "../context/AppContext";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({route,navigation}: HomeScreenProps) => {
  const all_user_data= null;
  console.log("Home Screen çalıştı");

  //sayfalar arası veri aktarıyor
  //const { user_data,all_user_data } = route.params;

  const{userEmail, setUserEmailText} = useAppContext();

  useBackHandler(() => {
    // Geri düğmesine basıldığında uygulamadan çıkın
    BackHandler.exitApp();
    return true;
  });
  
  const handleEmailClick = () => {console.log("flatlist")  };
  
  return (
    <View style={styles.container}>
    <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Detail"
        />
     <Text>-------------------------------------</Text>
     </View>
     <View style={styles.container}>

      <Text>Details Screen</Text>
      <View style={ {flex: 1,alignItems: 'center', justifyContent: 'center' ,flexDirection: 'row'}}>
      <View style={ {flex: 1,alignItems:'flex-start', justifyContent: 'center'}}>

      <FlatList
        data={all_user_data}
        renderItem={({item}) => <TouchableOpacity onPress={() => handleEmailClick()}>
        <Text style={styles.item}>{item.email}</Text>
      </TouchableOpacity>}
      />
      </View>

      <View style={ {flex: 1,alignItems: 'center', justifyContent: 'center'}}>
      <Text>store dan geliyor</Text>      
      <Text>name:{userEmail}</Text>
      <Text>--------------------------</Text>
      
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
