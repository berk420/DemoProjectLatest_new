import { Button, Text, TextInput, View,StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import axios,{AxiosResponse} from "axios";
//import {User} from "../../interfaces"; 
import { useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { login } from "../services/loginServices";
//import UserProvider,{ User, } from "../context/ApplicationContext";
import { useAppContext } from "../context/AppContext";
//import ThemedButton from './themed-button';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const{userEmail, setUserEmailText} = useAppContext();
  const{userid,setUserIdText}=useAppContext();
  const [email, setemail] = useState('Shanna@melissa.tv');
  const{theme, setThemeText}=useAppContext();
  //const [theme, settheme] = useState(true);
  //const isDarkmode=useColorScheme();

  const handleButtonPress = async () => { 
    const all_User_data = await login();
    const User_information = all_User_data.find((user: { email: string; }) => user.email === email);
    const User_information_email = User_information?.email || null;
    const User_information_id = User_information?.id || null;

    if(User_information){
      console.log(User_information_id);
      setUserIdText(User_information_id);
      setUserEmailText(User_information_email);
      navigation.navigate('Home');
    }
    else{
      console.log("entrye değer gir")
    }
  };

/*
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(newTheme);
  };

  

  
*/
useEffect(() => {
  console.log(theme);
}, [theme]);   
const handleButtonPress_theme = async () => {

  if(theme=="light"){
    setThemeText('dark');
  }
  else if(theme=="dark"){
    setThemeText('light')
  }

};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: 0 }}>

        <Text>Login Screen</Text>
        
        <Button title="Change theme" onPress={handleButtonPress_theme} />
        <Text style={theme=="dark" ? styles.darkText: styles.whiteText}>Hello</Text>
        <Text>---------------------</Text>
        <TextInput
        style={styles.entryField}
        placeholder="Veri girin"
        onChangeText={text => setemail(text)}
        value={email}
      />

      <Button title="Giriş yap" onPress={handleButtonPress} />
      <Text>------------------</Text>
       <Button
          title="Go to Forgot"
          onPress={() => navigation.navigate('Forgot')}
        />
      </View>


  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  whiteText:{
    color:'#FFFFFF'
  },
  darkText:{
    color:'#000000'
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
