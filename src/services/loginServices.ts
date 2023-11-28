import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";

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
