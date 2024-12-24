import React from "react";
import { StyleSheet } from "react-native";
import { Card } from "../../../components/display/Card";
import { Text } from "../../../components/base/Text";
import { StatsCardProps } from "../types/components";

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  trend,
}) => {
  return (
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
