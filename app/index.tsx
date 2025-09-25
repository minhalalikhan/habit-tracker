import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

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
          ...styles.Links,
          backgroundColor: "blue",
        }}
        href="/dashboard"
      >
        Go to Dashboard
      </Link>

      <Link
        style={{
          ...styles.Links,
          backgroundColor: "orange",
        }}
        href="/(tabs)/one"
      >
        Go to tabs
      </Link>
      <Link
        style={{
          ...styles.Links,
          backgroundColor: "green",
        }}
        href="/(stack)"
      >
        Go to Stack Tab
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  Links: {
    margin: 20,
    borderRadius: 20,
    fontSize: 18,
    padding: 10,
    color: "white",
  },
});
