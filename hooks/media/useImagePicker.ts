import { useCallback } from "react";
import * as ImagePicker from "expo-image-picker";
import { ImagePickerResult, ImagePickerOptions } from "../types/media";

export const useImagePicker = () => {
  const pickImage = useCallback(async (options: ImagePickerOptions = {}) => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      // パーミッション拒否時のハンドリングをより明確に
      throw new Error("Permission to access media library was denied");
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: options.allowsEditing ?? true,
      aspect: options.aspect ?? [4, 3],
      quality: options.quality ?? 1,
    });

    if (result.canceled || !result.assets[0]) {
      return null;
    }

    return {
      uri: result.assets[0].uri,
      width: result.assets[0].width,
      height: result.assets[0].height,
    };
  }, []);

  return { pickImage };
};
