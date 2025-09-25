import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NewPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen options={{ title: "Dashboard" }} />
      <Text>Dashboard page</Text>
      <Link href={".."} style={{ marginTop: 20, fontSize: 18, color: "blue" }}>
        Go to Home
      </Link>
    </View>
  );
}
