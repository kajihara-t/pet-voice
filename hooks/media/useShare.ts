import { Alert } from "react-native";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export const useShare = () => {
  const shareImage = async (uri: string) => {
    try {
      const tempUri = `${FileSystem.cacheDirectory}temp_share.jpg`;
      await FileSystem.copyAsync({ from: uri, to: tempUri });

      await Sharing.shareAsync(tempUri, {
        mimeType: "image/jpeg",
        dialogTitle: "画像を共有",
      });
    } catch (error) {
      console.error("共有エラー:", error);
      Alert.alert("エラー", "画像の共有に失敗しました");
      throw error;
    }
  };

  return { shareImage };
};
