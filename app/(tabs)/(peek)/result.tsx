import React, { useEffect, useRef } from "react";
import { StyleSheet, Image, Animated, View, Alert } from "react-native";
import { Container } from "@/components/base";
import { useLocalSearchParams, router } from "expo-router";
import { Button } from "@/components/base/Button";
import { PetLoadingOverlay } from "@/components/feedback/PetLoadingOverlay";
import { useMockApi } from "@/hooks/useMockApi";
import { analyzePetMood } from "@/__mocks__/services/petMode";
import type { PetMoodAnalysis } from "@/__mocks__/services/petMode/types";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useShare } from "@/hooks/media/useShare";
import ViewShot from "react-native-view-shot";

// TODO: UIが微妙なので改めて作り方を考える. 後でやる

interface ConfettiProps {
  style: any; // ViewStyle型を使用する場合はインポートして指定
}

const Confetti: React.FC<ConfettiProps> = ({ style }) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  return (
    <Animated.Text
      style={[
        styles.confetti,
        style,
        {
          opacity,
          transform: [{ translateY }, { rotate: "45deg" }],
        },
      ]}
    >
      🎊
    </Animated.Text>
  );
};

interface AnimatedTextProps {
  text: string;
  style: any; // TextStyle型を使用する場合はインポートして指定
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  style,
  delay = 0,
}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [delay, opacity, translateY]);

  return (
    <Animated.Text style={[style, { opacity, transform: [{ translateY }] }]}>
      {text}
    </Animated.Text>
  );
};

export default function ResultScreen() {
  const { execute, isLoading } = useMockApi<PetMoodAnalysis>();
  const { shareImage } = useShare();
  const previewRef = useRef<ViewShot>(null);

  const { imageUri, mood } = useLocalSearchParams<{
    imageUri: string;
    mood: string;
  }>();

  const handleRetry = async () => {
    const result = await execute(() => analyzePetMood(imageUri));
    if (result) {
      router.replace({
        pathname: "./result",
        params: {
          imageUri,
          mood: result.mood,
          timestamp: result.timestamp,
        },
      });
    }
  };

  const handleShare = async () => {
    if (!imageUri) return;
    try {
      await shareImage(imageUri);
    } catch (error) {
      console.error("Error sharing:", error);
      Alert.alert("エラー", "共有に失敗しました");
    }
  };

  return (
    <Container style={styles.container}>
      <View style={styles.content}>
        <ViewShot ref={previewRef} style={styles.shareContent}>
          <View style={styles.imageContainer}>
            <Confetti style={styles.leftConfetti} />
            <Confetti style={styles.rightConfetti} />
            <Image
              source={{ uri: imageUri }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.moodCard}>
            <AnimatedText
              text={`"${mood}"`}
              style={styles.moodText}
              delay={400}
            />
          </View>
        </ViewShot>

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => router.back()}
            variant="secondary"
            size="md"
            style={styles.button}
          >
            戻る
          </Button>
          <Button
            onPress={handleRetry}
            variant="primary"
            size="md"
            style={[styles.button, styles.retryButton]}
            disabled={isLoading}
          >
            もう一度
          </Button>
          <Button
            onPress={handleShare}
            variant="primary"
            size="md"
            style={[styles.button]}
            rightIcon={
              <LinearGradient
                colors={["#833AB4", "#E1306C", "#F77737"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.shareGradient}
              >
                <FontAwesome name="instagram" size={36} color="#fff" />
              </LinearGradient>
            }
          >
            投稿
          </Button>
        </View>
      </View>
      {isLoading && <PetLoadingOverlay />}
    </Container>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20, gap: 24 },
  imageContainer: { alignItems: "center" },
  image: {
    width: 256,
    height: 256,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "gray",
  },
  moodCard: {
    backgroundColor: "#D3D3D3",
    padding: 12, // 8から12に
    borderRadius: 8,
    width: "100%",
    marginTop: 32, // 追加
  },
  confetti: { position: "absolute", fontSize: 32 },
  leftConfetti: { left: 40, top: 60 },
  rightConfetti: { right: 40, top: 60 },
  moodText: {
    fontSize: 24,
    textAlign: "center",
    color: "#808080",
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    marginTop: "auto",
    paddingBottom: 20,
  },
  button: { flex: 1 },
  retryButton: { backgroundColor: "#34D399" },
  shareGradient: { borderRadius: 8 },
  shareContent: { alignItems: "center", gap: 24 },
});
