import { StyleSheet, View } from "react-native";
import Text from "@/components/base/Text";

export const EmptyState = () => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyText}>履歴がありません</Text>
  </View>
);

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },
  emptyText: {
    textAlign: "center",
    color: "#6B7280",
  },
});
