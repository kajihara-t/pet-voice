import React from "react";
import { ScrollView as RNScrollView, StyleSheet } from "react-native";
import { BaseScrollViewProps } from "../types/Base";

export const ScrollView: React.FC<BaseScrollViewProps> = ({
  children,
  style,
  showsVerticalScrollIndicator = false,
  showsHorizontalScrollIndicator = false,
  ...rest
}) => {
  return (
    <RNScrollView
      style={[styles.base, style]}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      {...rest}
    >
      {children}
    </RNScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

export default ScrollView;
