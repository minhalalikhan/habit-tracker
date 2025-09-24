import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NewIndex() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Text>new index</Text>
      <Link
        style={{
          marginTop: 20,
          fontSize: 18,
          color: "blue",
        }}
        href="/dashboard"
      >
        Go to Dashboard
      </Link>
    </View>
  );
}
