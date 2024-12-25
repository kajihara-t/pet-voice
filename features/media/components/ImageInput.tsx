import React, { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "@/components/base";
import { Text } from "@/components/base/Text";
import { ImageInputProps } from "../types/components";
import { Ionicons } from "@expo/vector-icons";
import { useImagePicker } from "@/hooks/media/useImagePicker";

/**
 * 画像選択コンポーネント
 *
 * @prop onSelect 選択された画像のURIを受け取るコールバック関数
 * @prop aspect 画像のアスペクト比 (default: [4, 3])
 * @prop quality 画像の品質 (default: 1)
 * @prop allowsEditing 画像の編集を許可するか否か (default: true)
 * @returns 画像選択コンポーネント
 */
export const ImageInput: React.FC<ImageInputProps> = ({
  onSelect,
  aspect = [4, 3],
  quality = 1,
  allowsEditing = true,
}) => {
  const { pickImage } = useImagePicker();

  const handlePress = useCallback(async () => {
    try {
      const result = await pickImage({ aspect, quality, allowsEditing });
      if (result) {
        onSelect(result.uri);
      }
    } catch (error) {
      // エラーハンドリングはアプリの要件に応じて実装
      console.error("Failed to pick image:", error);
    }
  }, [pickImage, onSelect, aspect, quality, allowsEditing]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel="画像を選択"
      >
        <Ionicons name="image-outline" size={32} color="#6b7280" />
        <Text style={styles.text}>画像を選択</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 4 / 3,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 8,
    fontSize: 16,
    color: "#6b7280",
  },
});
