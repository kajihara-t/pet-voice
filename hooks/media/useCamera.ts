// hooks/media/useCamera.ts
import { useCallback } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

export const useCamera = () => {
  const launchCamera = useCallback(async () => {
    // カメラパーミッションの確認
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status !== "granted") {
      throw new Error("Camera permission denied");
    }

    // モーダルでカメラを起動
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0];
    }
    return null;
  }, []);

  return { launchCamera };
};
