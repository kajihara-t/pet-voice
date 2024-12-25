import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "../../../components/display/Card";
import { Text } from "../../../components/base/Text";
import { StatsCardProps } from "../types/components";
import { ShadowBox } from "@/components/display";

/**
 * A card component for displaying a statistic with an optional subtitle and trend.
 *
 * @example
 * <StatsCard
 *   title="Subscribers"
 *   value="10,000"
 *   subtitle="Last 30 days"
 *   trend={{ isPositive: true, value: 20 }}
 * />
 *
 * @prop {string} title - The title of the statistic.
 * @prop {string} value - The value of the statistic.
 * @prop {string} [subtitle] - The subtitle of the statistic.
 * @prop {{ isPositive: boolean; value: number }} [trend] - The trend of the statistic.
 */
export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  trend,
}) => {
  return (
    <ShadowBox>
      <Card>
        <Text preset="caption" color="#6b7280">
          {title}
        </Text>
        <Text preset="title2" bold style={styles.valueSpacing}>
          {value}
        </Text>
        {subtitle && (
          <Text preset="caption" color="#6b7280">
            {subtitle}
          </Text>
        )}
        {trend && (
          <Text
            preset="caption"
            color={trend.isPositive ? "#10b981" : "#ef4444"}
            style={styles.trendSpacing}
          >
            {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
          </Text>
        )}
      </Card>
    </ShadowBox>
  );
};

const styles = StyleSheet.create({
  valueSpacing: {
    marginBottom: 4,
  },
  trendSpacing: {
    marginTop: 8,
  },
});

export default StatsCard;
