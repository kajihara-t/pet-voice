import { Container } from "@/components/base/Container";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function HistoryScreen() {
  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <MaterialCommunityIcons
          name="clock-time-eight-outline"
          size={64}
          color="#9CA3AF"
        />
        <Text style={styles.title}>Coming Soon...</Text>
        <Text style={styles.subtitle}>
          作成履歴機能は現在開発中です。{"\n"}
          もうしばらくお待ちください。
        </Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdf2f8",
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#4B5563",
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
  },
});
