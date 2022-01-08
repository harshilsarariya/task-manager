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
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    navigation.navigate("Login");
  };

  const signUpWithEmail = async () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));

    setName("");
    setEmail("");
    setPassword("");
    navigation.navigate("HomeAccount");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <Header title={"Sign up"} />
        <View style={{ marginTop: 0 }}>
          <Image
            source={require("../../assets/images/signup.png")}
            style={styles.signupImage}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <TextInput
            mode="Outlined"
            label="Name"
            value={name}
            onChangeText={(name) => setName(name)}
            style={styles.input}
          />
          <TextInput
            label="Email"
            value={email}
            style={styles.input}
            onChangeText={(email) => setEmail(email)}
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            value={password}
            style={styles.input}
            keyboardType="default"
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View>
          <Button
            onPress={signUpWithEmail}
            style={{ padding: 10, borderRadius: 20 }}
            mode="contained"
          >
            <Text style={{ fontSize: 15 }}>Create Account</Text>
          </Button>
          <View style={{ marginTop: 30, alignSelf: "center" }}>
            <Text style={{ fontSize: 18 }}>
              Already have an account?{" "}
              <Text onPress={handleLogIn} style={{ fontWeight: "bold" }}>
                Log in
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;

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
  signupImage: {
    height: 230,
    width: 230,
    alignSelf: "center",
  },
});
