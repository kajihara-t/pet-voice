import { Container } from "@/components/base/Container";
import { ListSection } from "@/components/display/ListSection";
import { ListItemData } from "@/components/types/display";
import { EmptyState } from "@/features/history/components/EmptyState";
import { StyleSheet } from "react-native";

export default function HistoryScreen() {
  const dogBreeds = [
    "柴犬",
    "トイプードル",
    "チワワ",
    "ポメラニアン",
    "フレンチブルドッグ",
    "ゴールデンレトリバー",
    "ラブラドール",
    "シベリアンハスキー",
  ];

  const emotions = [
    "うれしい",
    "やんちゃ",
    "おねむ",
    "おなかすいた",
    "わくわく",
    "まったり",
    "ごきげん",
    "リラックス",
  ];

  const messages = [
    "うちの子は今日もかわいい！",
    "散歩から帰ってきたところ",
    "おやつの時間がやってきた！",
    "お昼寝中のツーショット",
    "新しいおもちゃで遊んでみた",
    "今日は公園でたくさん走ったよ",
    "お友達と遊んだ後の満足げな表情",
    "朝のごはんタイム",
  ];

  const historyItems: ListItemData[] = Array.from(
    { length: 30 },
    (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);

      const randomDogBreed =
        dogBreeds[Math.floor(Math.random() * dogBreeds.length)];
      const randomEmotion =
        emotions[Math.floor(Math.random() * emotions.length)];
      const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

      return {
        id: String(index + 1),
        imageUrl: `https://placekitten.com/100/100?image=${index % 16}`, // placekittenは0-16の画像を提供
        title: randomMessage,
        subtitle: `犬種：${randomDogBreed} / 感情：${randomEmotion}`,
        timestamp: date.toLocaleDateString("ja-JP", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
        onPress: () => console.log(`Item ${index + 1} pressed`),
      };
    }
  );

  return (
    <Container style={styles.Container}>
      <ListSection
        title="作成履歴"
        items={historyItems}
        ListEmptyComponent={<EmptyState />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#fdf2f8",
  },
});
