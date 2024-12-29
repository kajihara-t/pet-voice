import { View, Text, Pressable, StyleSheet } from "react-native";
import { Stack, router } from "expo-router";

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "お知らせ",
          presentation: "modal",
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginLeft: 15,
              })}
            >
              <Text style={styles.closeText}>閉じる</Text>
            </Pressable>
          ),
        }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>お知らせ内容</Text>
        <Text style={styles.message}>ここにお知らせの内容を表示します。</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
  },
  closeText: {
    fontSize: 16,
    color: "#007AFF",
  },
});
