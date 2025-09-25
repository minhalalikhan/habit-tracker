import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ title: "My Tabs" }}>
      <Tabs.Screen
        name="one"
        options={{ title: "Tab One", headerShown: false }}
      />
      <Tabs.Screen
        name="two"
        options={{ title: "Tab two", headerShown: false }}
      />
    </Tabs>
  );
}
