import React from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Container,
} from "../../components/base";
import { StatsCard } from "./components/StatsCard";
import { AnimatedStatsCard } from "./components/AnimatedStatsCard";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * FeaturesDashboardScreen
 *
 * This screen provides a dashboard for the features of the application.
 * It displays three sections: revenue, user, and performance.
 * Each section contains several statistics, with the value, subtitle, and trend displayed.
 * The statistics are animated when the user scrolls into view.
 *
 * @returns React component
 */
/******  c03134e2-1979-4199-bf43-61f69bbd6cb8  *******/
export const FeaturesDashboardScreen = () => {
  // 収益関連の統計
  const revenueStats = [
    {
      title: "総収益",
      value: "¥1,234,567",
      subtitle: "今月の実績",
      trend: { value: 12.5, isPositive: true },
    },
    {
      title: "純利益",
      value: "¥456,789",
      subtitle: "今月の実績",
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: "平均取引額",
      value: "¥3,456",
      subtitle: "1件あたり",
      trend: { value: 3.1, isPositive: true },
    },
  ];

  // ユーザー関連の統計
  const userStats = [
    {
      title: "月間アクティブユーザー",
      value: "12,345",
      subtitle: "ユニーク数",
      trend: { value: 8.2, isPositive: true },
    },
    {
      title: "新規ユーザー",
      value: "1,234",
      subtitle: "今月の獲得",
      trend: { value: 15.3, isPositive: true },
    },
    {
      title: "ユーザー継続率",
      value: "85.4%",
      subtitle: "先月比",
      trend: { value: 2.1, isPositive: true },
    },
  ];

  // パフォーマンス関連の統計
  const performanceStats = [
    {
      title: "平均応答時間",
      value: "1.2秒",
      subtitle: "APIレスポンス",
      trend: { value: 3.1, isPositive: false },
    },
    {
      title: "エラー率",
      value: "0.05%",
      subtitle: "直近24時間",
      trend: { value: 0.01, isPositive: true },
    },
    {
      title: "API利用率",
      value: "76.3%",
      subtitle: "上限に対して",
      trend: { value: 5.2, isPositive: true },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text preset="title1" color="white">
            ダッシュボード
          </Text>
          <Text preset="title3" color="white">
            収益
          </Text>
          <Container>
            {revenueStats.map((stat, index) => (
              <AnimatedStatsCard key={index} index={index} stat={stat} />
            ))}
          </Container>
          <Text preset="title3" color="white">
            ユーザー
          </Text>
          <Container>
            {userStats.map((stat, index) => (
              <View key={index} style={styles.cardWrapper}>
                <StatsCard {...stat} />
              </View>
            ))}
          </Container>

          <Text preset="title3" color="white">
            パフォーマンス
          </Text>
          <Container>
            <View>
              {performanceStats.map((stat, index) => (
                <View key={index} style={styles.cardWrapper}>
                  <StatsCard {...stat} />
                </View>
              ))}
            </View>
          </Container>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  cardWrapper: {
    flex: 1,
    minWidth: 250,
    paddingVertical: 8,
  },
});
