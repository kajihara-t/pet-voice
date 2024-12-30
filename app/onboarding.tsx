import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view";
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import { useApp } from "../context/AppContext";
import { ReactNode, useRef, useState } from "react";

const AnimatedLottie = Animated.createAnimatedComponent(LottieView);

const EmojiAnimation: React.FC<{ children: ReactNode }> = ({ children }) => {
  const animation = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withRepeat(
          withSequence(
            withTiming(1.2, { duration: 500 }), // 500msでスケール1.2に
            withTiming(1, { duration: 500 }) // 500msでスケール1に戻す
          ),
          -1,
          true
        ),
      },
    ],
  }));

  return (
    <Animated.Text style={[{ fontSize: 24, marginLeft: 8 }, animation]}>
      {children}
    </Animated.Text>
  );
};

export default function OnboardingScreen() {
  const { completeOnboarding } = useApp();
  const pagerRef = useRef<PagerView>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage === 2) {
      completeOnboarding();
    } else {
      pagerRef.current?.setPage(currentPage + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.content}>
        <PagerView
          ref={pagerRef}
          initialPage={0}
          style={styles.pagerView}
          onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
        >
          {/* ページ1: Welcome */}
          <View key="1" style={styles.page}>
            <Animated.View style={styles.animationContainer}>
              <AnimatedLottie
                source={require("../assets/animations/dog-wagging.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            </Animated.View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>ようこそ</Text>
              <EmojiAnimation>🤗</EmojiAnimation>
            </View>
            <Text style={styles.subtitle}>AIがペットの気持ちを分析します</Text>
          </View>

          {/* ページ2: Camera */}
          <View key="2" style={styles.page}>
            <Animated.View style={styles.animationContainer}>
              <AnimatedLottie
                source={require("@/assets/animations/camera.json")}
                autoPlay
                loop={false}
                speed={1.5}
                style={styles.lottie}
              />
            </Animated.View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>カメラ機能</Text>
              <EmojiAnimation>📸</EmojiAnimation>
            </View>
            <Text style={styles.subtitle}>
              お気に入りの写真を選んでください
            </Text>
          </View>

          {/* ページ3: Share */}
          <View key="3" style={styles.page}>
            <Animated.View style={styles.animationContainer}>
              <AnimatedLottie
                source={require("@/assets/animations/instagram.json")}
                autoPlay
                loop
                style={styles.lottie}
              />
            </Animated.View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>シェア機能</Text>
              <EmojiAnimation>🔄</EmojiAnimation>
            </View>
            <Text style={styles.subtitle}>Instagramで共有できます</Text>
          </View>
        </PagerView>
        <View style={styles.indicatorsContainer}>
          {[0, 1, 2].map((index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentPage === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        {/* Navigation Button */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity onPress={handleNextPage} style={styles.button}>
            <Text style={styles.buttonText}>
              {currentPage === 2 ? "はじめる" : "次へ"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf2f8",
  },
  content: {
    flex: 1,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  animationContainer: {
    marginBottom: 32,
  },
  lottie: {
    width: 280,
    height: 280,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 16,
    color: "#4b5563",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 48,
  },
  button: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  indicatorsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 16,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#d1d5db",
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: "#6366f1",
    width: 24,
  },
  navigationContainer: {
    alignItems: "center",
    paddingBottom: 24,
  },
});
