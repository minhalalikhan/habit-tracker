import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ title: "my tabs" }} />
      <Stack.Screen name="(stack)" options={{ title: "My Stack Tab" }} />
    </Stack>
  );
}
