import React from "react";
import { StyleSheet, View as RNView } from "react-native";
import { View } from "@/components/base";
import { router } from "expo-router";
import { ImagePickerButton } from "@/components/media/ImagePickerButton";
import { CameraButton } from "@/components/media/CameraButton";
import LottieView from "lottie-react-native";

export default function PeekScreen() {
  const handleImageSelect = (uri: string) => {
    router.push({
      pathname: "./preview",
      params: { imageUri: uri },
    });
  };

  return (
    <View style={styles.container}>
      <RNView style={styles.contentWrapper}>
        <RNView style={styles.characterContainer}>
          <LottieView
            source={require("@/assets/animations/dog-floating.json")}
            autoPlay
            loop
            style={styles.lottie}
            speed={0.7}
          />
        </RNView>
        <RNView style={styles.buttonContainer}>
          <ImagePickerButton
            onSelect={handleImageSelect}
            options={{
              aspect: [4, 3],
              quality: 1,
              allowsEditing: true,
            }}
            style={styles.button}
          />
          <CameraButton onCapture={handleImageSelect} style={styles.button} />
        </RNView>
      </RNView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf2f8",
  },
  contentWrapper: {
    flex: 1,
    position: "relative",
  },
  characterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    width: 300,
    height: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  button: {
    flex: 1,
    maxWidth: 160,
    backgroundColor: "#DCD6F7",
  },
});
