import { Button, Text, TextInput, View,StyleSheet } from "react-native";
import axios,{AxiosResponse} from "axios";
//import {User} from "../../interfaces";
import { useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { login } from "../services/loginServices";
import UserProvider,{ User, } from "../context/ApplicationContext";
import { useAppContext } from "../context/AppContext";
//import ThemedButton from './themed-button';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const HomeScreen = ({navigation}: LoginScreenProps) => {

  //const{user}=useContext(WiserContext);

  const [email, setemail] = useState('Shanna@melissa.tv');
  const [visible, setVisible] = useState(true);


  const{userEmail, setUserEmailText} = useAppContext();

  const handleButtonPress = async () => { 
    
    const loginResult = await login();
    const targetEmail = email;
    const targetUser = loginResult.find((user: { email: string; }) => user.email === targetEmail);
    
    if(targetUser){
      console.log("GİRDİ");
      //console.log("tüm veri:",loginResult);
      //console.log("kullanıcı bilgileri:",targetUser);
      navigation.navigate('Home',{user_data:targetUser, all_user_data:loginResult});
    }
    else{
      console.log("entrye değer gir")
    }
  };

  const handleButtonPress_new =() => { 
    console.log(userEmail);
    try {
      setUserEmailText("adasdasd");

    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      console.log("User email: ", userEmail)
    }, 5000);
    return;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: 0 }}>

        <Text>Login Screen</Text>
        <Button title="Giriş yap" onPress={handleButtonPress_new} />

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

export default HomeScreen;

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
