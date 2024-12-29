import { Stack } from "expo-router";

export default function PeekLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        presentation: "modal",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "peek",
        }}
      />
      <Stack.Screen
        name="preview"
        options={{
          title: "プレビュー",
        }}
      />
    </Stack>
  );
}
