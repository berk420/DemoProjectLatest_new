import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    email: string;
    userName: string;
}
 
type ContextType = {
    //properties
    userEmail       : string;
    setUserEmailText : (email: string) => void
    //functions
}
 
type ProviderProps = {
    children: React.ReactNode;
}
 
const WiserContext =React.createContext<ContextType>({} as ContextType);
 
export function useAppContext(){
    return useContext(WiserContext);
}

export function WiserContextProvider ({children} : ProviderProps){
    const [userEmail, setUserEmail] = useState("aydıncan");

    //Refactor edilecek.
    const setUserEmailText = (email: string) =>{
        console.log("Email set edilecek, ", email);
        setUserEmail(email);
    }
 
    const value: ContextType = {
       userEmail,
       setUserEmailText
    }
 
    return <WiserContext.Provider value={value}>{children}</WiserContext.Provider>
}