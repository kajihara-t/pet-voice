import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@/components/base/Text";
import { useImagePicker } from "@/hooks/media/useImagePicker";
import { ImagePickerButtonProps } from "../types/media";

export const ImagePickerButton = ({
  onSelect,
  options,
  style,
}: ImagePickerButtonProps) => {
  const { pickImage } = useImagePicker();

  const handlePress = async () => {
    try {
      const result = await pickImage(options);
      if (result) {
        onSelect(result.uri);
      }
    } catch (error) {
      console.error("Failed to pick image:", error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      accessibilityLabel="画像を選択"
    >
      <Ionicons name="image-outline" size={32} color="#6b7280" />
      <Text style={styles.text}>画像を選択</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: "#6b7280",
  },
});
