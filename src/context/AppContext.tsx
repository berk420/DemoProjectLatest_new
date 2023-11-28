import React, { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type User = {
    iuseridd:number;
    email: string;
    userName: string;
}
 
type ContextType = {
    //properties
    userid:number;
    userEmail       : string;

    //function
    setUserEmailText : (email: string) => void;
    setUserIdText :(userid:number)=>void;
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

    //Refactor edilecek.
    const setUserEmailText = (email: string) =>{
        setUserEmail(email);
    }

    const setUserIdText = (userid: number) =>{
        setUserId(userid);
    }
 
    const value: ContextType = {
        userid,
        userEmail,
        setUserEmailText,
        setUserIdText,
    }
 //value prop'u ile WiserContext'e sağlayan kod bu 
    return <WiserContext.Provider value={value}>{children}</WiserContext.Provider>
}