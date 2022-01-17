import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm=({headerText,errorMessage,onSubmit})=>{
    const [email,setEmail]=useState('')
    const [passw,setPass]=useState('')

    return(<>
        <Spacer>
     <Text h3>{headerText} For Tracker</Text>
      </Spacer>

      <Spacer>
        <Input label="Email"   autoCapitalize="none" autoCorrect={false}   value={email} onChangeText={setEmail}/>
      </Spacer>

      <Spacer>
        
        <Input label="Password"  autoCapitalize="none" secureTextEntry autoCorrect={false}  value={passw} onChangeText={setPass}/>
      </Spacer>

      {errorMessage? <Text style={styles.err}>{errorMessage}</Text>:null}
   <Spacer><Button title={headerText} onPress={()=>{
          onSubmit({email,passw})
      }}/></Spacer>

      </>
    )
}
const styles=StyleSheet.create({
    err:{
        color:"red"
    },
})
export default AuthForm;