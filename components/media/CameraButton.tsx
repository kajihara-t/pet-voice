import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@/components/base/Text";
import { useCamera } from "@/hooks/media/useCamera";
import { CameraButtonProps } from "../types/media";

export const CameraButton = ({ onCapture, style }: CameraButtonProps) => {
  const { launchCamera } = useCamera();

  const handlePress = async () => {
    try {
      console.log("Camera button pressed"); // デバッグログ
      const photo = await launchCamera();
      console.log("Photo result:", photo); // 結果を確認
      if (photo?.uri) {
        onCapture(photo.uri);
      }
    } catch (error) {
      console.error("Failed to take photo:", error);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={handlePress}
      accessibilityLabel="写真を撮影"
    >
      <Ionicons name="camera-outline" size={32} color="#6b7280" />
      <Text style={styles.text}>写真を撮影</Text>
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
