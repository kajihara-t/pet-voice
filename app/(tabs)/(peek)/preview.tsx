import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@/components/base";
import { ImagePreview } from "@/features/media/components";
import { useLocalSearchParams, router } from "expo-router";

export default function PreviewScreen() {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();

  return (
    <View style={styles.container}>
      <ImagePreview
        uri={imageUri}
        onBack={() => router.back()}
        onSubmit={() => {
          console.log("TODO: 送信処理を実装する");
          // TODO: 送信処理を実装
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
