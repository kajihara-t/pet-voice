import { Stack, router } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function SettingsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "設定",
        }}
      />
      <Stack.Screen
        name="news"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
