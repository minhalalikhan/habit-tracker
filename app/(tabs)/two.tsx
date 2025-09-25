import { StyleSheet, Text, View } from "react-native";

export default function TabTwo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tab two </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Links: {
    margin: 20,
    borderRadius: 20,
    fontSize: 18,
  },
});
