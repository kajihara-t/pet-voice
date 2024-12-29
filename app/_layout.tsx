import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { AppProvider } from "../context/AppContext";
import { StyleSheet } from "react-native";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)/(peek)",
};

// アプリ起動時に即座にSplashScreenを表示
SplashScreen.preventAutoHideAsync().catch(() => {
  /* keep splash screen */
});

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="onboarding"
        options={{
          presentation: "fullScreenModal",
          animation: "slide_from_bottom",
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          contentStyle: styles.screen,
        }}
      />
      <Stack.Screen
        name="news"
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      // フォントロード完了後にSplashScreenを非表示に
      SplashScreen.hideAsync().catch(() => {
        /* ignore */
      });
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      <RootLayoutNav />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#fdf2f8",
  },
});
