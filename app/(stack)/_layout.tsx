import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootAtab() {
  return (
    <View>
      <Stack screenOptions={{ title: "Stack Routes" }}></Stack>
    </View>
  );
}
