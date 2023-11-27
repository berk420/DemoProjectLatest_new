import { useContext, useEffect, useState,createContext, Dispatch, SetStateAction, ReactNode} from "react";
//import AsyncStorage from "@react-native-async-storage/async-storage";

export type User={//user adında kullanıcı
    name:string
    email:string
}

export interface WiserContextInterface{//wiser context adında bir interface tanımlandı
    user:User,
    setUser : Dispatch<SetStateAction<User>>
}

//alt satırda kullanıcı belli değilse boş 
//export const WiserContext= createContext<Partial<WiserContextInterface>>({});

const defaultState={
    user:{
        name:"default",
        email:"default"
    },
    setUser: (user:User) => {}
} as WiserContextInterface



export const WiserContexasdt= createContext(defaultState)

type UserProvideProps={
    children:ReactNode
}

export default function UserProvider({children}:UserProvideProps)
{

    const[user, setUser] =useState<User>({
        name:'',
        email:''
    });

    return(
        <WiserContexasdt.Provider value={{user,setUser}}>
         {children}
        </WiserContexasdt.Provider>
    )
}
/*
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
*/