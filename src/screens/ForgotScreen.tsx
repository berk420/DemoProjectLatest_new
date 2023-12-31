import { Button, Text, View } from "react-native";

import React, { useEffect } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { SafeAreaView } from "react-native-safe-area-context";

type ForgotScreenProps = NativeStackScreenProps<RootStackParamList, 'Forgot'>;

const ForgotScreen = ({navigation}: ForgotScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
        <Text>Forgot Screen</Text>
        
        <Button
          title="Return to login"
          onPress={() => navigation.navigate('LoginScreen')}
        />
        
      </SafeAreaView>
  )
}

export default ForgotScreen

