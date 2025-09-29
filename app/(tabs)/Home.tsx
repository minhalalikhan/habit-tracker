import { StyleSheet, Text, View } from "react-native";

export default function TabOne() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Tab one </Text>
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
