import React from "react";
import Animated from "react-native-reanimated";
import { StatsCard } from "./StatsCard";
import { useStatsCardAnimation } from "../hooks/useStatsCardAnimation";
import { StyleSheet } from "react-native";
import { AnimatedStatsCardProps } from "../types/components";

/**
 * A StatsCard component that is animated in with a slide-in animation.
 *
 * This component is used in the dashboard to render a list of stats cards
 * with an animation.
 *
 * @param index The index of the card in the list. This is used to stagger the
 * animation.
 * @param stat The props to pass to the StatsCard component.
 *
 * @example
 * <AnimatedStatsCard index={0} stat={{ title: "Card 1", value: 100 }} />
 */
export const AnimatedStatsCard: React.FC<AnimatedStatsCardProps> = ({
  index,
  stat,
}) => {
  const { style } = useStatsCardAnimation(index);

  return (
    <Animated.View style={[styles.cardWrapper, style]}>
      <StatsCard {...stat} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    minWidth: 250,
    paddingVertical: 8,
  },
});
