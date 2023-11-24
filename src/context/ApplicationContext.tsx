import React, { useContext, useEffect, useState } from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";



const newValue = 3;

const defaultValue = {
    val: 0,
    setVal: (newValue) => {},
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