import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";

import { Button, Text, TextInput } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState(false);

  const [error, setError] = useState("");

  function HandleAuth() {}

  function HandleSwitch() {
    setIsSignUp(!isSignUp);
  }

  return (
    <KeyboardAvoidingView
      style={AuthStyles.container}
      behavior="padding"

      // causes flickering on android
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={AuthStyles.content}>
        <Text style={AuthStyles.title}>
          {isSignUp ? "Create Account<" : "Welcome Back"}
        </Text>

        {/* <Link href="/modalpage" style={{ color: "blue" }}>
          Go to modal
        </Link> */}
        <TextInput
          label={"Email"}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
          mode="outlined"
        />

        <TextInput
          label={"Password"}
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
        />

        {error && <Text style={AuthStyles.error}>{error}</Text>}

        <Button style={AuthStyles.button} mode="contained" onPress={HandleAuth}>
          {isSignUp ? "SignUp" : "SignIn"}
        </Button>
        <Button
          mode="text"
          onPress={HandleSwitch}
          style={AuthStyles.switchbutton}
        >
          {isSignUp
            ? "Already have an account? SignIn"
            : "Dont have an account? SIgnUp"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const AuthStyles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    padding: 20,
    // paddingBottom: 40,
  },
  input: {},
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  error: { color: "red", fontSize: 12, marginVertical: 10 },
  button: {
    width: "60%",
    backgroundColor: "coral",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  switchbutton: {
    // width: "60%",
    minWidth: "auto",
    color: "white",
    textAlign: "center",
    alignSelf: "center",
    marginTop: 5,
  },
});
