import React from "react";
import { StyleSheet, Image, Pressable, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Text } from "@/components/base";

interface ImagePreviewProps {
  uri: string;
  onBack: () => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  uri,
  onBack,
  onSubmit,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.footer}>
        <Pressable onPress={onBack} style={styles.backButton}>
          <Text style={styles.buttonText}>もどる</Text>
        </Pressable>
        <View style={styles.submitWrapper}>
          <Pressable
            onPress={onSubmit}
            style={[
              styles.submitButton,
              disabled && styles.submitButtonDisabled,
            ]}
            disabled={disabled}
          >
            <FontAwesome
              name="magic"
              size={24}
              color={disabled ? "#9CA3AF" : "#FFFFFF"}
            />
          </Pressable>
          <Text style={styles.submitText}>気持ちを聞く</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  backButton: {
    padding: 8,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: "#666666",
    fontSize: 16,
  },
  imageContainer: {
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 12,
    backgroundColor: "#fdf2f8",
    borderColor: "#E5E7EB",
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    paddingTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 16,
  },
  submitWrapper: {
    alignItems: "center",
    marginRight: 8,
  },

  submitButton: {
    backgroundColor: "#1F9D55",
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  submitButtonDisabled: {
    backgroundColor: "#E5E7EB",
  },
  submitText: {
    color: "#666666",
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
  },
});
