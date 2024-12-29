import { StyleSheet, View, Pressable } from "react-native";
import Text from "@/components/base/Text";
import type { MenuItem } from "../types/display";

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

export const MenuSection = ({ title, items }: MenuSectionProps) => (
  <View style={styles.section}>
    <Text preset="caption" style={styles.sectionTitle}>
      {title}
    </Text>
    <View style={styles.sectionContainer}>
      {items.map((item, index) => (
        <View key={item.label}>
          <Pressable
            onPress={item.onPress}
            style={({ pressed }) => [
              styles.menuItem,
              pressed && styles.pressed,
            ]}
          >
            <Text preset="body" style={styles.label}>
              {item.label}
            </Text>
            <View style={styles.rightContainer}>
              {item.value && (
                <Text preset="body" style={styles.value}>
                  {item.value}
                </Text>
              )}
              {item.showArrow !== false && (
                <Text preset="body" style={styles.arrow}>
                  {"＞"}
                </Text>
              )}
            </View>
          </Pressable>
          {index !== items.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 8,
    color: "#6B7280",
  },
  sectionContainer: {
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    minHeight: 48,
  },
  menuItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#E5E5E5",
  },
  pressed: {
    backgroundColor: "#F3F4F6",
  },
  label: {
    flex: 1,
    fontSize: 16,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: 24,
    justifyContent: "flex-end",
  },
  value: {
    marginRight: 12,
    color: "#6B7280",
    fontSize: 16,
  },
  arrow: {
    color: "#6B7280",
    fontSize: 16,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#E5E5E5",
    marginHorizontal: "4%",
  },
});
