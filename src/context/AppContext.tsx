import React, { createContext,useContext, useState,useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    iuseridd:number;
    email: string;
    userName: string;
    theme:string;
}
 
type ContextType = {
    //properties
    userid:number;
    userEmail       : string;
    theme:string;

    //function
    setUserEmailText : (email: string) => void;
    setUserIdText :(userid:number)=>void;
    setThemeText: (theme:string)=>void;
}
 
type ProviderProps = {
    //children, herhangi bir geçerli React alt öğesi olabilen bir React.ReactNode'dur.
    children: React.ReactNode;
}

//Bu, WiserContext adında bir React bağlamı oluşturur ve onu ContextType türündeki boş bir nesneyle başlatır. 
export const WiserContext =React.createContext<ContextType>({} as ContextType);
 
export function useAppContext(){
    return useContext(WiserContext);
}

export function WiserContextProvider ({children} : ProviderProps){
    const [userEmail, setUserEmail] = useState("default");
    const [userid,setUserId]=useState(0);
    const [theme, setTheme] = useState('light');
    //Refactor edilecek.
    const setUserEmailText = (email: string) =>{
        setUserEmail(email);
    }

    const setUserIdText = (userid: number) =>{
        setUserId(userid);
    }

    const setThemeText = (theme: string) =>{
        setTheme(theme);
    }
    
    const value: ContextType = {
        userid,
        userEmail,
        theme,
        setUserEmailText,
        setUserIdText,
        setThemeText,
    }
 //value prop'u ile WiserContext'e sağlayan kod bu 
    return <WiserContext.Provider value={value}>{children}</WiserContext.Provider>
}