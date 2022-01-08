import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";

const HomeAccount = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#8533ff", "#a366ff", "#c299ff"]}
        style={{
          height: 230,
          width: 420,
          borderBottomRightRadius: 200,
          borderBottomLeftRadius: 200,
          marginLeft: -30,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 30, color: "white", paddingBottom: 25 }}>
          Harshil Sarariya
        </Text>
        <View style={styles.circle}>
          <FontAwesome5 name="user-alt" size={100} />
        </View>
      </LinearGradient>

      <View style={{ marginTop: 40 }}>
        <View style={{ margin: 20 }}>
          <View style={styles.userInfo}>
            <FontAwesome5 color={"#A194F4"} name="user-alt" size={20} />
            <Text style={styles.userInfoText}>Harshil Sarariya</Text>
          </View>

          <View style={styles.userInfo}>
            <FontAwesome color={"#A194F4"} name="mobile-phone" size={30} />
            <Text style={styles.userInfoText}> 9510142642</Text>
          </View>

          <View style={styles.userInfo}>
            <MaterialCommunityIcons color={"#A194F4"} name="email" size={20} />
            <Text style={styles.userInfoText}>harshilsarariya@gmail.com</Text>
          </View>
        </View>
      </View>
      <Button
        style={{
          width: 200,
          alignSelf: "center",
          fontSize: 20,
          padding: 3,
          top: 85,
        }}
        icon="logout"
        mode="contained"
      >
        Log Out
      </Button>
    </View>
  );
};

export default HomeAccount;

const styles = StyleSheet.create({
  container: {
    height: 500,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: "white",
    marginBottom: -120,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7851BD",
  },
  userInfoText: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    color: "#666666",
  },
  userInfo: {
    flexDirection: "row",
    margin: 15,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    alignItems: "center",
  },
});
