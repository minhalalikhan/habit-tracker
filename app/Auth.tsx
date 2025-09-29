import { Link } from "expo-router";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text>Create Account</Text>

        <Link href="/modalpage" style={{ color: "blue" }}>
          Go to modal
        </Link>
      </View>
    </KeyboardAvoidingView>
  );
}
