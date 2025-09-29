import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // title: "My Tabs",
        headerShown: false,
        tabBarActiveTintColor: "coral",
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",

          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome name="home" size={24} color={color} />
            ) : (
              <AntDesign name="home" size={24} color={"black"} />
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, focused }) => {
            return focused ? (
              <FontAwesome name="user-alt" size={24} color={color} />
            ) : (
              <FontAwesome name="user" size={24} color={"black"} />
            );
          },
        }}
      />
    </Tabs>
  );
}
