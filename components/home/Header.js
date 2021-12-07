import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.title}</Text>
      {props.icon === "bell" ? <AntDesign name="bells" size={20} /> : <></>}
      {props.icon === "search" ? <Feather name="search" size={20} /> : <></>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
