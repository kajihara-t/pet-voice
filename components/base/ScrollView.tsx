import React from "react";
import { ScrollView as RNScrollView, StyleSheet } from "react-native";
import { BaseScrollViewProps } from "../types/Base";

/**
 * A basic ScrollView component that wraps its children in a RNScrollView component.
 *
 * Has the same API as RNScrollView.
 *
 * @prop {React.ReactNode} children - The content to be scrolled.
 * @prop {ViewStyle} style - Additional styles for the RNScrollView.
 * @prop {boolean} showsVerticalScrollIndicator - Whether to show the vertical scroll indicator.
 * @prop {boolean} showsHorizontalScrollIndicator - Whether to show the horizontal scroll indicator.
 *
 * @example
 * <ScrollView>
 *   <Text>Scrollable content</Text>
 * </ScrollView>
 *
 * @example
 * <ScrollView
 *   showsVerticalScrollIndicator={false}
 *   showsHorizontalScrollIndicator={false}
 * >
 *   <Text>Scrollable content with no scroll indicators</Text>
 * </ScrollView>
 */
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
