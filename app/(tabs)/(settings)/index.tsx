import { StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { useCallback } from "react";
import { Alert } from "react-native";

import { View } from "@/components/base/View";
import { Container } from "@/components/base/Container";
import Text from "@/components/base/Text";
import { MenuSection } from "@/components/display/MenuSection";
import type { MenuItem } from "@/components/types/display";

// TODO: 側だけの実装なので、後で実装する

export default function SettingsScreen() {
  const handleReviewPress = useCallback(() => {
    Alert.alert("レビュー", "ストアのレビュー画面を開きます");
  }, []);

  const handleContactPress = useCallback(() => {
    Alert.alert("お問い合わせ", "メーラーを開きます");
  }, []);

  const handleNotificationPress = useCallback(() => {
    Alert.alert("通知設定", "通知の設定を変更します");
  }, []);

  const petProfileSettings: MenuItem[] = [
    {
      label: "名前",
      onPress: () => Alert.alert("ペットの名前", "ペットの名前を変更します"),
    },
    {
      label: "性別",
      onPress: () => Alert.alert("ペットの性別", "ペットの性別を変更します"),
    },
    {
      label: "一人称",
      onPress: () =>
        Alert.alert("ペットの一人称", "ペットの一人称を変更します"),
    },
  ];

  const basicSettings: MenuItem[] = [
    {
      label: "通知設定",
      onPress: handleNotificationPress,
    },
    {
      label: "使い方",
      onPress: () => Alert.alert("使い方", "ヘルプ画面を開きます"),
    },
  ];

  const otherSettings: MenuItem[] = [
    {
      label: "アプリをレビュー",
      onPress: handleReviewPress,
    },
    {
      label: "利用規約",
      onPress: () => Alert.alert("利用規約", "利用規約画面を開きます"),
    },
    {
      label: "プライバシーポリシー",
      onPress: () =>
        Alert.alert(
          "プライバシーポリシー",
          "プライバシーポリシー画面を開きます"
        ),
    },
    {
      label: "お問い合わせ",
      onPress: handleContactPress,
    },
    {
      label: "バージョン",
      value: "1.0.0",
      showArrow: false,
    },
  ];

  return (
    <Container>
      <ScrollView style={styles.scrollView}>
        {/* 広告枠（ダミー） */}
        <View style={styles.adContainer}>
          <Text preset="body" style={styles.adText}>
            広告エリア
          </Text>
        </View>

        <MenuSection title="基本設定" items={basicSettings} />
        <MenuSection title="ペットのプロフィール" items={petProfileSettings} />
        <MenuSection title="その他" items={otherSettings} />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  adContainer: {
    height: 128,
    backgroundColor: "#E5E5E5",
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  adText: {
    color: "#6B7280",
  },
});
