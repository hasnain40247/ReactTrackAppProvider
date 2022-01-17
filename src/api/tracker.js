import axios from "axios";
import { AsyncStorage } from "react-native";
const instance= axios.create({
    baseURL:'https://174d-223-230-80-4.ngrok.io'
})

instance.interceptors.request.use(
    async (config)=>{
        const token=await AsyncStorage.getItem('token')
        if(token){
            config.headers.authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
return Promise.reject(err)
    }
    
);

export default instance;