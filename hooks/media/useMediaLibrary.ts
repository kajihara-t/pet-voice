import { Alert } from "react-native";
import * as MediaLibrary from "expo-media-library";

export const useMediaLibrary = () => {
  const saveToLibrary = async (uri: string) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("権限エラー", "画像の保存権限が必要です");
        return;
      }

      const asset = await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert("保存完了", "画像をフォトライブラリに保存しました");
      return asset;
    } catch (error) {
      console.error("保存エラー:", error);
      Alert.alert("エラー", "画像の保存に失敗しました");
      throw error;
    }
  };

  return { saveToLibrary };
};
