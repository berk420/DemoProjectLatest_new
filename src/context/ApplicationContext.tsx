import React, { useContext, useEffect, useState } from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";



const newValue = 33;

const defaultValue = {
    val: 0,
    setVal: (newValue) => {},
  };

export const themes = {
light: {
    foreground: '#000000',
    background: '#eeeeee',
},
dark: {
    foreground: '#ffffff',
    background: '#222222',
},
};

const WiserContext = React.createContext(defaultValue);

const WiserContextProvider = ({children}) => {
    const[val,setVal] = React.useState(0);
    const[val1,setVal2] = React.useState(0);
    const[val2,setVal3] = React.useState(0);

    return(
        <WiserContext.Provider value={{
            val,setVal
        }}>
        {children}
        </WiserContext.Provider>
    )
}
export {WiserContext,WiserContextProvider}