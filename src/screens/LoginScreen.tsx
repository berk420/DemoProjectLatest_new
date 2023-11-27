import { Button, Text, TextInput, View,StyleSheet } from "react-native";
import axios,{AxiosResponse} from "axios";
import {User} from "../../interfaces";
import { useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { login } from "../services/loginServices";
import { WiserContext,themes } from "../context/ApplicationContext";
//import ThemedButton from './themed-button';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const HomeScreen = ({navigation}: LoginScreenProps) => {

  const{val,setVal}=useContext(WiserContext);

  const [email, setemail] = useState('Shanna@melissa.tv');
  const [visible, setVisible] = useState(true);
  const handleButtonPress = async () => { 
    
    navigation  
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
  const handeVisibility = ()=>{
    console.log("Çalıştı 0");
    setTimeout(() => {
      console.log("Çalıştı 1");
      console.log("Çalıştı 2");
    }, 3000);
    console.log("Çalıştı 3")
    // setVisible(!visible);
    setemail((prevValue) => prevValue + ' asdadas');
  }

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: 0 }}>

        <Text>Login Screen</Text>
        <Text>{val}</Text>

        <Text></Text>

        <Button
        title="Increace"
        onPress={()=>{
          setVal(val+1);
        }}></Button>

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
        <Button title="Set Visible" onPress={handeVisibility}/>
        {visible && <Text>{email}</Text>}
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
