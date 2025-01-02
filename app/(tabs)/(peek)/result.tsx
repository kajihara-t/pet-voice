// TODO: UIが微妙なので改めて作り方を考える. 後でやる
import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Image,
  Animated,
  View,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import { Container, Text } from "@/components/base";
import { useLocalSearchParams, router } from "expo-router";
import { PetLoadingOverlay } from "@/components/feedback/PetLoadingOverlay";
import { useMockApi } from "@/hooks/useMockApi";
import { analyzePetMood } from "@/__mocks__/services/petMode";
import type { PetMoodAnalysis } from "@/__mocks__/services/petMode/types";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useShare } from "@/hooks/media/useShare";
import ViewShot from "react-native-view-shot";
import ConfettiCannon from "react-native-confetti-cannon";

interface AnimatedTextProps {
  text: string;
  style: any; // TextStyle型を使用する場合はインポートして指定
  delay?: number;
  onAnimationComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  style,
  delay = 0,
  onAnimationComplete,
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
    ]).start(onAnimationComplete);
  }, [delay, opacity, translateY, onAnimationComplete]);

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
  const confettiRef = useRef<ConfettiCannon>(null);

  const { imageUri, mood } = useLocalSearchParams<{
    imageUri: string;
    mood: string;
  }>();

  // 初期レンダリング時に紙吹雪を発射
  useEffect(() => {
    confettiRef.current?.start();
  }, []);

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
    <ScrollView>
      <Container style={styles.container}>
        <View style={styles.content}>
          <ViewShot ref={previewRef} style={styles.shareContent}>
            <View style={styles.imageWrapper}>
              <LinearGradient
                colors={["#E1306C", "#405DE6", "#5851DB", "#FF1A75", "#FFD700"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.imageGradientBorder}
              >
                <Image
                  source={{ uri: imageUri }}
                  style={styles.image}
                  resizeMode="cover"
                />
              </LinearGradient>
            </View>

            <View style={styles.moodCard}>
              <View style={styles.quoteIconContainer}>
                <MaterialCommunityIcons
                  name="format-quote-open"
                  size={24}
                  color="#9CA3AF"
                />
              </View>
              <AnimatedText text={mood} style={styles.moodText} delay={400} />
              <View style={[styles.quoteIconContainer, styles.quoteIconEnd]}>
                <MaterialCommunityIcons
                  name="format-quote-close"
                  size={24}
                  color="#9CA3AF"
                />
              </View>
            </View>
          </ViewShot>

          <View style={styles.iconContainer}>
            <View style={styles.iconColumn}>
              <Pressable
                onPress={() => {
                  router.dismissAll();
                }}
                style={styles.iconWrapper}
              >
                <MaterialCommunityIcons name="home" size={32} color="#666666" />
              </Pressable>
            </View>

            <View style={styles.iconColumn}>
              <Pressable onPress={handleRetry} style={styles.iconWrapper}>
                <FontAwesome name="magic" size={32} color="#1F9D55" />
              </Pressable>
              <Text style={styles.iconLabel}>＼同じ画像でもう一度／</Text>
            </View>

            <View style={styles.iconColumn}>
              <Pressable onPress={handleShare} style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="share-variant"
                  size={32}
                  color="#FF70A0"
                />
              </Pressable>
            </View>
          </View>
        </View>
        <ConfettiCannon
          ref={confettiRef}
          count={200}
          origin={{ x: window.width / 2, y: window.height / 4 }}
          autoStart={false}
          fadeOut
          explosionSpeed={200}
          fallSpeed={2000}
        />
        {isLoading && <PetLoadingOverlay />}
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fdf2f8" },
  content: { flex: 1, padding: 20, gap: 24 },
  imageWrapper: {
    alignItems: "center",
  },
  imageGradientBorder: {
    padding: 2,
    borderRadius: 14,
  },
  image: {
    width: 256,
    height: 256,
    borderRadius: 12,
    backgroundColor: "#fdf2f8",
  },

  moodCard: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 12,
    width: "100%",
    marginTop: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  moodText: {
    fontSize: 24,
    textAlign: "center",
    color: "#4B5563",
    fontStyle: "italic",
    lineHeight: 32,
    paddingHorizontal: 8,
  },
  quoteIconContainer: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  quoteIconEnd: {
    left: undefined,
    right: 8,
    bottom: 8,
    top: undefined,
  },
  confetti: { position: "absolute", fontSize: 32 },
  leftConfetti: { left: 40, top: 60 },
  rightConfetti: { right: 40, top: 60 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "auto",
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
  },
  retryButton: {
    backgroundColor: "#9AE6B4",
  },
  postButton: {
    backgroundColor: "#FF70A0",
  },
  shareGradient: { borderRadius: 8 },
  shareContent: { alignItems: "center", gap: 24 },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginTop: "auto",
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  iconWrapper: {
    padding: 8,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLabel: {
    fontSize: 10,
    color: "#666666",
    textAlign: "center",
    marginTop: 4,
  },
  iconColumn: {
    alignItems: "center",
    minHeight: 70,
  },
});
