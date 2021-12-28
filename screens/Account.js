import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/home/Header";
import HomeAccount from "../components/account/HomeAccount";
import Divider from "react-native-divider";

const Account = () => {
  return (
    <View style={styles.container}>
      <Header title="Account" />
      <Divider />
      <HomeAccount />
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
