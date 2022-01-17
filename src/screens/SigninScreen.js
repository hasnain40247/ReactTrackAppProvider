import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext} from "../context/AuthContext"
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


const SigninScreen = ({ navigation }) => {

const {state,signin}=useContext(AuthContext)
console.log(state);
  return (
    <View style={styles.container}>
     <AuthForm  headerText={"Sign In"} errorMessage={state.errorMessage} 
     
     onSubmit={signin}
     />
<NavLink text={"Don't have an account? Sign up now!"} routeName={"Signup"} />
    </View>
  );
};

SigninScreen.navigationOptions=()=>{
    return {
        headerShown:false
    }
}
const styles = StyleSheet.create({
 
   
    container:{
 
        flex:1,
        justifyContent:"center",
        marginBottom:300

    }
});

export default SigninScreen;
