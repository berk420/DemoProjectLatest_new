import { Button, Text, TextInput, View,StyleSheet, useColorScheme, TouchableOpacity } from "react-native";
import { useContext, useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { login } from "../services/loginServices";
import { useAppContext } from "../context/AppContext";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const lngs={
  en:{nativeName:"English"},
  tr:{nativeName:"Türkçe"}

}


type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [email, setemail] = useState('Shanna@melissa.tv');
  const{userEmail, setUserEmailText} = useAppContext();
  const{userid,setUserIdText}=useAppContext();
  const{theme, setThemeText}=useAppContext();
  const[lang,setlang]=useState("en");

  const {t} = useTranslation();

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

const handleButtonPress_theme = async () => {
  if(theme=="light"){
    setThemeText('dark');
  }
  else if(theme=="dark"){
    setThemeText('light')
  }
}

const handleButtonPress_language = async () => {
  if(lang=="en"){
    setlang('tr');
  }
  else if(lang=="tr"){
    setlang('en')
  }
}

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',margin: 0 }}>

        <Text>Login Screen</Text>
        
        <Button title="Change theme" onPress={handleButtonPress_theme} />
        <Text style={theme=="dark" ? styles.darkText: styles.whiteText}>Hello</Text>
        <Text>---------------------</Text>
        <Button title="Change language" onPress={handleButtonPress_language}/>
        <Text>{lang}</Text>
        <Text>Text</Text>

        <Text>---------------------</Text>
        {Object.keys(lngs).map((lng)=>(
          <Button title="degistir" key={lng} onPress={()=>i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}></Button>
        ))}
        <Text>{t("wiserSenseLocalization.email")}</Text>

        <Text>---------------------</Text>
        <Text>{t("wiserSenseLocalization.email")}</Text>
        <TextInput
        style={styles.entryField}
        placeholder="Veri girin"
        onChangeText={text => setemail(text)}
        value={email}/>

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
