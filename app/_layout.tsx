import { Stack } from "expo-router";

function RouteGuard() {
  const isAuth = false;

  return isAuth;
}

const isAuth = RouteGuard();

export default function RootLayout() {
  return (
    // <RouteGuard>
    <Stack>
      <Stack.Protected guard={isAuth}>
        <Stack.Screen name="(tabs)" options={{ title: "Habit Tracker" }} />
      </Stack.Protected>

      <Stack.Screen
        name="Auth"
        options={{ headerShown: true, title: "Auth " }}
      />

      <Stack.Screen
        name="modalpage"
        options={{
          presentation: "containedTransparentModal",
          animation: "none",
          headerShown: false,
        }}
      />
    </Stack>
    // </RouteGuard>
  );
}
