import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@/components/base";
import { router } from "expo-router";
import { ImagePickerButton } from "@/components/media/ImagePickerButton";
import { CameraButton } from "@/components/media/CameraButton";

export default function PeekScreen() {
  const handleImageSelect = (uri: string) => {
    router.push({
      pathname: "/preview",
      params: { imageUri: uri },
    });
  };
  return (
    <View style={styles.container}>
      <ImagePickerButton
        onSelect={handleImageSelect}
        options={{
          aspect: [4, 3],
          quality: 1,
          allowsEditing: true,
        }}
      />
      <CameraButton onCapture={handleImageSelect} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
    justifyContent: "center",
  },
});
