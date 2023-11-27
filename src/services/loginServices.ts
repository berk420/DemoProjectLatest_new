import axios, { AxiosResponse } from "axios";
import { useState,useContext } from "react";
import { Alert } from "react-native";
import { User } from "../../interfaces";

export const login = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        });

        return response.data;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}

export const user_photo = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        });
        return response.data;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}

export const login_w_oldlink = async (email: string) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
            email: email,
        });
        if(response.data.email == "test"){
            response.data.emailStateIsValid = true;
        } 
        return response.data;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}

/*
export const getUserData = async () => {
    const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    return response.data;
  };

  getUserData().then((users) => {
  // Kullanıcı verilerini işleyin
});
*/
/*
export const login = async (email: string) => {
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
            email: email,
        });
        return response.data;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}
*/

/*
export const[userData,setUserData] = useState<User[]>([]);

export const login = async () => {
    try {
        axios
        .get<User[]>('https://jsonplaceholder.typicode.com/users')
        .then((response:AxiosResponse)=>{
            setUserData(response.data);
          });
        return userData;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}
*/

/*
function login() {
    const [userData, setUserData] = useState<User[]>([]);
  
    const handleLogin = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUserData(response.data);
      } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
      }
    };
}
*/
/*
export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(Constants.REST_URL + Constants.SIGNIN_METHOD, {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        Alert.alert("Error", JSON.stringify(error));
    }
}


useEffect(() =>{
    axios
    .get<User[]>('https://jsonplaceholder.typicode.com/users')
    .then((response:AxiosResponse)=>{
      setUserData(response.data);
    });

  }, []);

  */