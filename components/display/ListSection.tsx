import { StyleSheet, FlatList, View, Pressable, Image } from "react-native";
import Text from "@/components/base/Text";
import { ListItemData, ListSectionProps } from "../types/display";

export function ListSection({
  title,
  items,
  ListEmptyComponent,
}: ListSectionProps) {
  return (
    <View style={styles.section}>
      {title && (
        <Text preset="caption" style={styles.sectionTitle}>
          {title}
        </Text>
      )}
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
        ListEmptyComponent={ListEmptyComponent}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

function ListItem({ item }: { item: ListItemData }) {
  return (
    <Pressable
      onPress={item.onPress}
      style={({ pressed }) => [styles.itemContainer, pressed && styles.pressed]}
    >
      {item.imageUrl && (
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          defaultSource={require("@/assets/images/petkoe-icon.webp")}
        />
      )}
      <View style={styles.textContainer}>
        <Text preset="body" style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {item.subtitle && (
          <Text preset="caption" style={styles.subtitle} numberOfLines={1}>
            {item.subtitle}
          </Text>
        )}
      </View>
      {item.timestamp && (
        <Text preset="caption" style={styles.timestamp}>
          {item.timestamp}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
  },
  sectionTitle: {
    paddingHorizontal: 16,
    marginBottom: 8,
    color: "#6B7280",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 8,
    // iOS shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    // Android shadow
    elevation: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    marginBottom: 4,
  },
  subtitle: {
    color: "#6B7280",
  },
  timestamp: {
    color: "#6B7280",
    fontSize: 12,
  },
});
