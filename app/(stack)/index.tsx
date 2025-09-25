import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack.Screen options={{ title: "Stack Group" }}>
      {/* <Stack.Screen name="(tabs)" options={{ title: "my tabs" }} /> */}
    </Stack.Screen>
  );
}
