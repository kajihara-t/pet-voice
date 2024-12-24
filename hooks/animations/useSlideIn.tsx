import { useEffect } from "react";
import {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import type { SlideInConfig } from "../types/animations";

/**
 *  opacity 0   translateY from   1  0
 *
 * @param {{duration?: number, delay?: number, from?: number}} config
 * @returns {{style: AnimatedStyleProps}}
 */
export const useSlideIn = (config: SlideInConfig = {}) => {
  const {
    duration = 500,
    delay = 0,
    from = -50, // デフォルトで上から50ポイント分の位置から開始
  } = config;

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(from);

  useEffect(() => {
    // delayの後にアニメーション開始
    const timeoutId = setTimeout(() => {
      opacity.value = withTiming(1, { duration });
      translateY.value = withSpring(0, {
        damping: 20,
        stiffness: 90,
      });
    }, delay);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  return { style };
};
