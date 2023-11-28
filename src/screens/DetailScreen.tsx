import { BackHandler, Button, Image, Text, View } from "react-native";
import {useEffect,useState} from 'react';

import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useBackHandler } from '@react-native-community/hooks';
import { user_photo } from "../services/loginServices";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";



type ConfiemScreenProps = NativeStackScreenProps<RootStackParamList, 'Detail'>;

const HomeScreen = ({route,navigation}: ConfiemScreenProps) => 
{
  const [id, setid] = useState('');
  const [img, setimg]=useState('');


  //bu sayfaya kullanıcının id değerini getirmemiz gerekiyor 
  const { user_mail,user_id } = route.params;

  const handleButtonPress = async () => { 
    navigation  
    const user_pht = await user_photo();
    const targetId =user_id ;
    const targetPhoto = user_pht.find(photo => photo.id === targetId);
    if (targetPhoto) {
      console.log("Fotoğraf Bilgileri:");
      console.log("ID:", targetPhoto.id);
      console.log("Başlık:", targetPhoto.title);
      console.log("URL:", targetPhoto.url);
      console.log("Thumbnail URL:", targetPhoto.thumbnailUrl);

      setimg(targetPhoto.thumbnailUrl);
    } else {
      console.log(`ID'si ${targetId} olan fotoğraf bulunamadı.`);
    }

  };

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Text>------------------</Text>
           <Text>useremail: {user_mail}</Text>
           <Text>userid: {user_id}</Text>
           <Button title="Fotoğraf görüntüle" onPress={handleButtonPress} />
           <Image style={{ width: 150, height: 150 }} source={{ uri: img }}/>
      </View>
      
  )
}

export default HomeScreen