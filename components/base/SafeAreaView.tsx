import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { BaseSafeAreaViewProps } from "../types/base";

/**
 * A basic safe area component that wraps its children in a
 * `react-native-safe-area-context` `SafeAreaView` component.
 *
 * @prop {React.ReactNode} children - The child elements to wrap.
 * @prop {("top" | "right" | "bottom" | "left")[]} edges - An array of edges to take into account.
 * @prop {React.CSSProperties} style - Additional styles for the safe area.
 *
 * @example
 * <SafeAreaView edges={["top", "bottom"]}>
 *  <Text>Hello world!</Text>
 * </SafeAreaView>
 */
export const SafeAreaView: React.FC<BaseSafeAreaViewProps> = ({
  children,
  edges,
  style,
  ...props
}) => {
  return (
    <RNSafeAreaView edges={edges} style={[styles.safeArea, style]} {...props}>
      {children}
    </RNSafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
