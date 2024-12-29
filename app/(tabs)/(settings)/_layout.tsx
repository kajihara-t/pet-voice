import { Stack } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function SettingsLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: Colors[colorScheme ?? "light"].background,
        // },
        // headerTintColor: Colors[colorScheme ?? "light"].text,
        // headerTitleStyle: {
        //   fontFamily: "Roboto",
        // },

        headerShown: false,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "設定",
        }}
      />
    </Stack>
  );
}
