import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";
const authReducer=(state,action)=>{
    switch(action.type){
        case 'signout':
            return {token:null, errorMessage:''}
        case 'signin':
            return {errorMessage:'',token:action.payload}

        case 'signup':
            return {errorMessage:'',token:action.payload}

        case 'add_error':
            return {...state,errorMessage: action.payload}
        case 'rem_error':
            return {...state,errorMessage: action.payload}
        default:
            return state
    }
}

const tryLocalSignin=(dispatch)=>{
    return async ()=>{
        const token = await AsyncStorage.getItem('token')
        if(token){
            dispatch({type:'signin', payload:token})
            navigate('TrackList')
        }
        else{
            navigate('loginFlow')
        }
    }
}
const signup=(dispatch)=>{
    return async ({email,passw})=>{
try{
console.log(email);
console.log(passw);
const response= await trackerApi.post("/signup",{email,passw})
await AsyncStorage.setItem('token', response.data.token)
dispatch({type: 'signup',payload:response.data.token})
navigate('TrackList')
}catch(err){
dispatch({type: 'add_error',payload:'Something went wrong with sign up'})
}
    }
}

const signin=(dispatch)=>{
    return async ({email,passw})=>{
        try{
            console.log(email);
            console.log(passw);
            const response= await trackerApi.post("/signin",{email,passw})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin',payload:response.data.token})
            navigate('TrackList')
            }catch(err){
            dispatch({type: 'add_error',payload:'Something went wrong with sign up'})
            }
    }
}

const signout=(dispatch)=>{
    return async ()=>{
await AsyncStorage.removeItem('token');
dispatch({type:'signout'})
navigate('loginFlow')

    }
}
export const {Context, Provider}= createDataContext(
    authReducer,{signin,signout, signup,tryLocalSignin},{token:null, errorMessage:''}
)