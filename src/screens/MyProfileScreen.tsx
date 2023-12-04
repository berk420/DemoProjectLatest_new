import { Button, Text, TextInput, View,StyleSheet, BackHandler } from "react-native";
import axios,{AxiosResponse} from "axios";
import {User} from "../../interfaces";
import {useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stacktype } from "../../App";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useBackHandler } from '@react-native-community/hooks';
import { tabbartype } from "../../Tabbarroot";


type MyProfileScreenProps = NativeStackScreenProps<tabbartype, 'MyProfile'>;

const MyProfileScreen = ({navigation}: MyProfileScreenProps) => {

  const[userData,setUserData] = useState<User[]>([]);
  
  useBackHandler(() => {
    // Geri düğmesine basıldığında uygulamadan çıkın
    BackHandler.exitApp();
    return true;
  });
  
  useEffect(() =>{
    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((response:AxiosResponse)=>{
      setUserData(response.data);
    });

  }, []);
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: 0 }}>
        <Text>my profile Screen</Text>
      </View>
  )
}

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
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
