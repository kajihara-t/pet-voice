import type { WithTimingConfig } from "react-native-reanimated";
export type SlideInConfig = {
  duration?: number;
  delay?: number;
  from?: number;
};

export type TransitionConfig = {
  duration?: number;
  delay?: number;
  timingConfig?: WithTimingConfig;
};
