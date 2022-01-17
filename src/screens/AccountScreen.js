import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const AccountScreen = () => {
    const {signout}=useContext(AuthContext)
  return (
    <SafeAreaView forceInset={{top:'always'}} style={styles.container}>
      <Spacer>

          <Text h1>AccountScreen</Text>

        <Spacer>
          <Button
            title="Sign Out"
            onPress={
           signout
            }
          />
        </Spacer>
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {

  },
});

AccountScreen.navigationOptions={
 tabBarLabel: "Account",
tabBarLabelStyle:{
  fontWeight: "bold",
  fontSize: 26
},
  tabBarIcon:<MaterialCommunityIcons name="account-circle-outline" size={24} color="black" />
}
export default AccountScreen;
