import { useEffect } from "react";
import {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";
import type { TransitionConfig } from "../types/animations";

/**
 * Simple transition animation hook for opacity and transform
 * @param {{duration?: number, delay?: number, timingConfig?: WithTimingConfig}} config
 * @returns {{style: AnimatedStyleProps, trigger: () => void}}
 */
export const useTransition = (config: TransitionConfig = {}) => {
  const { duration = 300, delay = 0, timingConfig } = config;

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.95);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      opacity.value = withTiming(1, {
        duration,
        ...timingConfig,
      });
      scale.value = withTiming(1, {
        duration,
        ...timingConfig,
      });
    }, delay);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  const trigger = () => {
    opacity.value = withTiming(1, {
      duration,
      ...timingConfig,
    });
    scale.value = withTiming(1, {
      duration,
      ...timingConfig,
    });
  };

  return { style, trigger };
};
