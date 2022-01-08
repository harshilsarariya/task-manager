import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import HomeAccount from "../components/account/HomeAccount";
import AccountNavigation from "../components/account/AccountNavigation";
import Login from "../components/account/Login";
import SignUp from "../components/account/SignUp";
const Account = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Login navigation={navigation} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
  },
});
