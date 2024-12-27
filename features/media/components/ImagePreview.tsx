import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Button } from "@/components/base/Button";
import { ImagePreviewProps } from "../types/components";

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  uri,
  onBack,
  onSubmit,
  disabled = false, // TODO: disabledを含めて対応
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      {/* TODO: Androidでプレビューがうまくいってなかったので調査する */}
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={onBack}
            variant="secondary"
            size="sm"
            style={styles.button}
          >
            戻る
          </Button>
          <Button
            onPress={onSubmit}
            variant="primary"
            size="sm"
            style={styles.button}
          >
            送信
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    paddingVertical: 16,
    marginTop: 32,
  },
  buttonWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
  },
  button: {
    minWidth: 120,
  },
});
