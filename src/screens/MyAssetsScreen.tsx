import { Button, Text, TextInput, View,StyleSheet, BackHandler,TouchableOpacity  } from "react-native";
import axios,{AxiosResponse} from "axios";
import {User} from "../../interfaces";
import {useEffect,useState} from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { stacktype } from "../../App";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useBackHandler } from '@react-native-community/hooks';
import { tabbartype } from "../../Tabbarroot";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { SparklesIcon as SparklesIconMini } from "react-native-heroicons/mini";
import { SparklesIcon as SparklesIconOutline } from "react-native-heroicons/outline";
import { SparklesIcon } from "react-native-heroicons/solid";
import { XMarkIcon, PlusIcon } from 'react-native-heroicons/outline'






type MyAssets = NativeStackScreenProps<tabbartype, 'MyAssets'>;

const MyAssetsScreen = ({navigation}: MyAssets) => {

  useBackHandler(() => {
    BackHandler.exitApp();
    return true;
  });
  
  return (
    <View style={styles.container}>
      {/**Header Section */}
      <View style={styles.header}>

      <TouchableOpacity onPress={() =>console.log("ss") }>
      <PlusIcon size={30} color={'black'}/>
        </TouchableOpacity>

        <Text>My Assets</Text>
        <Text></Text>
      </View>

      {/**Middle part of page*/}
      <View style={styles.AssetsContainer}>
        <View style={styles.AssetsContainerTite}>


        <View style={styles.AssetsContainerTiteleftside}>
        <Text>ww</Text>

            </View>
          <View style={styles.AssetsContainerTiteRightside}>
          <Text>qq</Text>
            <Text>ww</Text>
            <Text>ee</Text>

          </View>


        </View>
      </View>
    </View>
  )
}

export default MyAssetsScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'grey',
  },
  header:{
    paddingHorizontal: 10,
    
    display: 'flex',
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',
    alignSelf: 'center',

    marginTop: 10,
    backgroundColor: 'white',
    height: 60,
    marginHorizontal: 30,
    width: widthPercentageToDP(95),
    borderRadius: 10

  },
  AssetsContainer:{
    flex:1,
    backgroundColor:'green',
    alignSelf: 'center',
    width: widthPercentageToDP(90),
    margin:heightPercentageToDP(10),
    borderRadius: 10,
    elevation: 5
  },
  AssetsContainerTite:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor:'black',
    alignSelf:'flex-start',
    width:widthPercentageToDP(90),
    height:heightPercentageToDP(8),
  },

  AssetsContainerTiteleftside:{
    alignSelf: 'flex-start',
    backgroundColor:'white',
    width:widthPercentageToDP(45),
    height:heightPercentageToDP(8),
    alignItems: 'center',
  },
  
  AssetsContainerTiteRightside:{
    alignSelf: 'flex-end',

    alignItems: 'center',
    justifyContent: 'space-between',

    display: 'flex',
    flexDirection: 'row',

    backgroundColor:'yellow',
    width:widthPercentageToDP(45),
    height:heightPercentageToDP(8),
  },
})



