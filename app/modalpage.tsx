import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export default function ModalPage() {
  const router = useRouter();
  return (
    <Pressable style={styles.overlay} onPress={() => router.back()}>
      <Pressable style={styles.modal} onPress={(e) => e.stopPropagation()}>
        <Text>This is a modal page</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)", // translucent dark background
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "80%",
    height: "50%",
    padding: 20,
    borderRadius: 16,
    backgroundColor: "white",
    elevation: 5, // Android shadow
  },
});
