import { Alert, Platform, View } from "react-native";
import { captureRef } from "react-native-view-shot";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

// TODO: Instagramへの投稿文を、アプリの内部で設定できるようにする、テンプレ文を作るように
// dev-client, appledeveloperなどの設定が整ったら、react-native-shareなどを使用し、

export const useInstagramShare = () => {
  const saveAndShare = async (uri: string) => {
    try {
      const tempUri = `${FileSystem.cacheDirectory}temp_share.jpg`;
      await FileSystem.copyAsync({ from: uri, to: tempUri });

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("権限エラー", "画像の保存権限が必要です");
        return;
      }

      await MediaLibrary.saveToLibraryAsync(tempUri);
      await Sharing.shareAsync(tempUri, {
        mimeType: "image/jpeg",
        dialogTitle: "Instagramで共有",
      });
    } catch (error) {
      throw error;
    }
  };

  return { saveAndShare };
};
