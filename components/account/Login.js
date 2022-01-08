import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import Header from "../home/Header";
import { Button, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  const loginWithEmail = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));

    setEmail("");
    setPassword("");
    navigation.navigate("HomeAccount");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Header title={"Log In"} />
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../../assets/images/login.png")}
            style={styles.loginImage}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <TextInput
            label="Email"
            value={email}
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            label="Password"
            value={password}
            style={styles.input}
            onChangeText={(password) => setPassword(password)}
          />
          <Button
            style={{ padding: 10, borderRadius: 20 }}
            onPress={loginWithEmail}
            mode="contained"
          >
            <Text style={{ fontSize: 15 }}>Log In</Text>
          </Button>
        </View>
        <View style={{ marginTop: 30, alignSelf: "center" }}>
          <Text style={{ fontSize: 18 }}>
            Don't have an account?{" "}
            <Text onPress={handleSignUp} style={{ fontWeight: "bold" }}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  button: {
    width: "45%",
    fontSize: 20,
    padding: 10,
    borderRadius: 20,
  },
  input: {
    marginBottom: 20,
  },
  loginImage: {
    height: 250,
    width: 250,
    alignSelf: "center",
  },
});
