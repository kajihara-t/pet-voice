import { useSlideIn } from "@/hooks/animations/useSlideIn";

/**
 * Generates an animation configuration for a stats card animation.
 *
 * The animation is a slide-in from the top, with a 600ms duration and a
 * 30-pixel offset from the top of the screen. The delay is set to the index
 * of the card multiplied by 100ms, to create a staggered animation effect.
 *
 * @param {number} [index=0] The index of the card in the list.
 * @return {import("react-native-reanimated").WithTimingConfig} An animation
 *   configuration object.
 */
export const useStatsCardAnimation = (index: number = 0) => {
  return useSlideIn({
    delay: index * 100,
    duration: 600,
    from: -30,
  });
};
