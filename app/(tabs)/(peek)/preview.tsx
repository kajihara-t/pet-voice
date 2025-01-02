import React from "react";
import { StyleSheet } from "react-native";
import { View } from "@/components/base";
import { ImagePreview } from "@/features/media/components";
import { useLocalSearchParams, router } from "expo-router";
import { useMockApi } from "@/hooks/useMockApi";
import { analyzePetMood } from "@/__mocks__/services/petMode";
import type { PetMoodAnalysis } from "@/__mocks__/services/petMode/types";
import { PetLoadingOverlay } from "@/components/feedback/PetLoadingOverlay";

export default function PreviewScreen() {
  const { imageUri } = useLocalSearchParams<{ imageUri: string }>();
  const { execute, isLoading } = useMockApi<PetMoodAnalysis>();

  const handleSubmit = async () => {
    const result = await execute(() => analyzePetMood(imageUri));
    if (result) {
      router.push({
        pathname: "./result",
        params: {
          imageUri,
          mood: result.mood,
          confidence: result.confidence.toString(),
          timestamp: result.timestamp,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImagePreview
        uri={imageUri}
        onBack={() => router.back()}
        onSubmit={handleSubmit}
        disabled={isLoading}
      />
      {isLoading && <PetLoadingOverlay />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fdf2f8",
  },
});
